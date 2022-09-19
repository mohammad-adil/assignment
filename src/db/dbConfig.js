const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

console.log(process.env.DB_CONNECTION);
async function connectDB() {
  await mongoose
    .connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB Server");
    })
    .catch((err) => {
      console.log(err);
    });
}
connectDB();
