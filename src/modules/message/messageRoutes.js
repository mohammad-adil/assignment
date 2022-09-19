const { scheduleMessage } = require("./messageService");

const router = require("express").Router();

router.post("/", scheduleMessage, (req, res) => {
  return res.status(200).json({ message: " Success", data: req.body.message });
});

module.exports = router;
