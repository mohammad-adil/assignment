const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: String,
  insertedAt: Date,
});

module.exports = mongoose.model("message", MessageSchema);
