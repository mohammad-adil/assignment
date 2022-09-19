const { Worker } = require("worker_threads");
const getRows = require("./readService");
const _ = require("lodash");
const mongoose = require("mongoose");

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/modules/upload/uploadServiceWorker.js", {
      workerData,
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(
          new Error(`Stopped the Worker Thread with the exit code: ${code}`)
        );
    });
  });
}

function uploadFileToDB(filePath) {
  return getRows(filePath)
    .then((data) =>
      _.chunk(data, 100).map((dataBatch) => runService(dataBatch))
    )
    .then((data) => Promise.all(data))
    .then((data) => data)
    .catch(console.error);
}

module.exports = uploadFileToDB;
