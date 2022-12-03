const ErrorHander=require("../utils/errorhander");

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "Internal server Error";


    //Wrong Mongodb ID error
    if(err.name==="CastError"){
        const message=`Resource not Found, Invalid: ${err.path}`;
        err=new ErrorHander(message,400);
    }


    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err=new ErrorHander(message,400);
    }
//wrong JWT token error
    if(err.name === "JsonWebTokenError"){
        const message = `Json web token is invalid, Try again `;
        err=new ErrorHander(message,400);
    }

    if(err.name === "TokenExpiredError"){
        const message = `Json web token is Expired, Try again `;
        err=new ErrorHander(message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        error:err.message,
    });
};