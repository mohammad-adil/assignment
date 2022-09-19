// This contains the structure for User. Has an id,firstname, Dob, address, phone number, state, zip code, email, gender, userType
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    first_name: String,
    DOB: Date,
    address: String,
    ph_number: String,
    state: String,
    zip_code: String,
    email: String,
    gender: String,
    userType: String,
    policies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Policy" }],
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", UserSchema);
