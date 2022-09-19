const { User } = require("../../models/index");

function getAggregatedPolicyByUser() {
  return User.find({})
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

async function getSavedUser(UserData) {
  return await User.findOneAndUpdate(
    {
      first_name: UserData.first_name,
      DOB: UserData.DOB,
    }, // find a document with that filter
    { $setOnInsert: UserData }, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true, useFindAndModify: false }
  );
}

module.exports = {
  getAggregatedPolicyByUser,
  getSavedUser,
};
