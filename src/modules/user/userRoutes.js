const { getAggregatedPolicyByUser } = require("../user/userService");

const router = require("express").Router();

router.get("/policies", (req, res) => {
  return getAggregatedPolicyByUser()
    .then((data) => res.status(200).json({ data: data }))
    .catch((err) => res.status(400));
});

module.exports = router;
