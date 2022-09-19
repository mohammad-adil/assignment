const schedule = require("node-schedule");
const { Message } = require("../../models/index");

exports.scheduleMessage = async (req, res, next) => {
  const { message, scheduleDate } = req.body;

  const insertAt = new Date(scheduleDate);
  schedule.scheduleJob(insertAt, () => {
    new Message({
      message: message,
      insertedAt: new Date().toUTCString(),
    }).save();
  });
  next();
};
