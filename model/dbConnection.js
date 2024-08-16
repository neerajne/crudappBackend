const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("Connection successful with DB");
    })
    .catch((err) => {
      console.error("Connection error", err);
    });
};

module.exports = connectDB;
