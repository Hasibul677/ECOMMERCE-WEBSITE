const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./config/database");


// Unhandling Uncaught Exception
process.on("uncaughtException", err=>{
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to  Uncaught Exception");
  process.exit(1);
})


//Connecting to database
connectDatabase();


app.listen(process.env.PORT, () => {
  console.log(`Server is connected on http://localhost:${process.env.PORT}`);
});

// Unhandler promise Rejection
process.on("unhandledRejection", err=>{
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandlerd Promise Rejection");

  server.close(()=>{
    process.exit(1);
  });
})
