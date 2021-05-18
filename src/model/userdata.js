const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fname: String,
  lname: String,
  phone: Number,
  email: String,
  password: String,
});

var UserData = mongoose.model("userdata", UserSchema);

module.exports = UserData;
