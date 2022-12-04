
const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
const { Server } = require("http");


//Handling Uncaught Exception

process.on("uncaughtException", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception `);
    process.exit(1);
});
//config 
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
//
app.listen(process.env.PORT, () => {
    console.log(`Server is working on https://localhost:${process.env.PORT}`)
})


//unhandled promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error:${err.message}`);
    console.log(`Shutting down tghe server due to Unhandled promises Rejection`);

    Server.close(() => {
        process.exit(1);
    })

})