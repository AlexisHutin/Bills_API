const mongoose = require("mongoose");
var Schema = mongoose.Schema;


const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
