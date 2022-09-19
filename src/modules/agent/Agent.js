// This contains the structure for Agent. Has an id and name.
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AgentSchema = Schema({
  agent_name: Schema.Types.String,
});

module.exports = mongoose.model("Agent", AgentSchema);
