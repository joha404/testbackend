const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  age: String,
});
module.exports = mongoose.model("user", userSchema);
