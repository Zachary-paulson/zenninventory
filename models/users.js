const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true},
  googleID: { type: String, required: false},
  ebayID: { type: String, required: false},
  etsyID: { type: String, required: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
