const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/BlogDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

module.exports = mongoose;
