const multer = require("multer");
const path = require("path");
const maxSize = 2 * 1024 * 1024;
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/data"));
  },
  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/");
    let extension = extArray[extArray.length - 1];
    cb(null, file.originalname + "-" + Date.now() + "." + extension);
  },
});
exports.upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("upload");

exports.checkFile = (req, res, next) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    next();
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
