// This contains the structure for Carrier. Has an id and company_name.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarrierSchema = Schema({
  company_name: Schema.Types.String,
});

module.exports = mongoose.model("Carrier", CarrierSchema);