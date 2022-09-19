const { User, Policy } = require("../../models/index");

function getPolicyInfoByUsername(userName) {
  return User.findOne({ first_name: userName })
    .select("-__v -_id")
    .populate({
      path: "policy",
      select: "-__v -_id -user",
      populate: [
        { path: "agent", select: "-__v -_id" },
        { path: "lob", select: "-__v -_id" },
        { path: "carrier", select: "-__v -_id" },
      ],
    });
}
function getAggregatedPolicy() {
  return Policy.find({})
    .select("-__v -_id")
    .populate("user", "-__v -_id -policy")
    .populate("agent", "-__v -_id")
    .populate("lob", "-__v -_id")
    .populate("carrier", "-__v -_id");
}

async function getCityPolicyCount() {
  try {
    const cityData = await User.aggregate([
      { $unwind: { path: "$policies", preserveNullAndEmptyArrays: false } },
      {
        $group: {
          _id: "$state",
          policyCount: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          state: "$_id",
          policyCount: 1,
        },
      },
    ]).exec();

    return cityData;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getPolicyInfoByUsername,
  getAggregatedPolicy,
  getCityPolicyCount,
};
