//Create Token and saving in Cookie
const sendToken = async (user, statusCode, res) => {
  const token = await user.getJWTToken();
  
  //Option for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  res.cookie("token", token, options).status(statusCode).json({
    success: true,
    user,
  });


};

module.exports = sendToken;
