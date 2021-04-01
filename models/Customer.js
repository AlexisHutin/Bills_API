const mongoose = require("mongoose");
var Schema = mongoose.Schema;


const CustomerSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    is_company: { type: Boolean, required: true},
    referal_user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);