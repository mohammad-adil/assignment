const uploadFileToDB = require("./uploadService");
const { upload, checkFile } = require("../../middleware/fileUpload");
const router = require("express").Router();

router.post("/", upload, checkFile, (req, res) => {
  return uploadFileToDB(req.file.path)
    .then((data) => res.status(200).json({ data: data }))
    .catch((err) => res.status(400));
});

module.exports = router;
