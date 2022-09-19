// This contains the structure for Policy. Has an id,policy number, policy start date, policy end date, policy category collection id, company collection id, and user id.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PolicySchema = Schema({
  policy_number: Schema.Types.String,
  policy_start_date: Schema.Types.Date,
  policy_end_date: Schema.Types.Date,
  lob: { type: Schema.Types.ObjectId, ref: "LOB" },
  carrier: { type: Schema.Types.ObjectId, ref: "Carrier" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  agent: { type: Schema.Types.ObjectId, ref: "Agent" },
});

module.exports = mongoose.model("Policy", PolicySchema);
