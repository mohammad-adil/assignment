const { workerData, parentPort } = require("worker_threads");
require("../../db/dbConfig");
const { User, Policy } = require("../../models/index");
const { mapRawRowToRespectiveObject } = require("../../utils");
const { getSavedAgent } = require("../agent/agentService");
const { getSavedLOB } = require("../lob/lobService");
const { getSavedCarrier } = require("../carrier/carrierService");
const { getSavedUserAccount } = require("../user/userAccountService");
const { getSavedUser } = require("../user/userService");

const mappedData = mapRawRowToRespectiveObject(workerData);

const data = mappedData.map(async (data) => {
  try {
    const savedAgent = await getSavedAgent(data.agent);
    const savedLOB = await getSavedLOB(data.lob);
    const savedCarrier = await getSavedCarrier(data.carrier);
    const savedUserAccount = await getSavedUserAccount(data.userAccount);

    const savedUser = await getSavedUser(data.user);

    const savedPolicy = await new Policy({
      ...data.policy,
      user: savedUser._id,
      agent: savedAgent._id,
      lob: savedLOB._id,
      carrier: savedCarrier._id,
      user_account: savedUserAccount._id,
    }).save();

    const updateData = await User.findByIdAndUpdate(
      savedUser._id,
      {
        $push: { policies: savedPolicy._id },
      },
      { new: true, runValidators: true, useFindAndModify: false }
    );

    return savedPolicy._id;
  } catch (err) {
    console.error(err);
  }
});

if (data.length === mappedData.length) {
  return parentPort.postMessage({
    message: "All Data Saved Successfully",
    status: "Done",
  });
} else {
  return parentPort.postMessage({
    message: "Data Saved Partially",
    status: "Issue",
  });
}
