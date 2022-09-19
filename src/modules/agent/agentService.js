const Agent = require("./Agent");

exports.getSavedAgent = async (agent) => {
  return await Agent.findOneAndUpdate(
    {
      agent_name: agent.agent_name,
    },
    { $setOnInsert: agent },
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
};
