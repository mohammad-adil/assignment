// This contains the structure for LOB(Line of Business). Has an id and category_name
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LOBSchema = Schema({
  category_name: Schema.Types.String,
});

module.exports = mongoose.model("LOB", LOBSchema);
