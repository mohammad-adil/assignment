const {
  getAggregatedPolicy,
  getPolicyInfoByUsername,
  getCityPolicyCount,
} = require("../policy/policyService");

const router = require("express").Router();

router.get("/", (req, res) => {
  return getAggregatedPolicy()
    .then((data) => res.status(200).json({ data: data }))
    .catch((err) => res.status(400));
});

router.get("/getByUser/:userName", (req, res) => {
  return getPolicyInfoByUsername(req.params.userName)
    .then((data) => res.status(200).json({ data: data }))
    .catch((err) => res.status(400));
});

router.get("/getByCity", async (req, res) => {
  try {
    const data = await getCityPolicyCount();
    return res.status(200).json({ data: data });
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;
