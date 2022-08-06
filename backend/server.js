const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./config/database");

//Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is connected on http://localhost:${process.env.PORT}`);
});
