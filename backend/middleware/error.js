const ErrorHander = require("../utils/errorHander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Wrong Mongodb Id Eror
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  //Wrong JWT Eror
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Please try again`;
    err = new ErrorHander(message, 400);
  }

  //JWT Expire Eror
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Please try again`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
