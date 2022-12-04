const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please Enter the name"],
        maxLength: [30, "Name cannot be greater than 30 characters"],
        minLength: [4, "Name cannot be less than 4 characters"]
    },
    email: {
        type: String,
        required: [true, "please Enter the email"],
        unique: true,
        validate: [validator.isEmail, "Please enter the valid Email"]
    },
    password: {
        type: String,
        required: [true, "Pleaser enter the valid Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre("save", async function (next) {


    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

//JWT token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

};


//compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//Generating password Reset Token
userSchema.methods.getResetPasswordToken = function () {

    // Generating Token
    const resetToken = crypto.randomBytes(20).toString("hex");
    //hashing and addin to user schema 

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
    return resetToken;
}

module.exports = mongoose.model("User", userSchema);