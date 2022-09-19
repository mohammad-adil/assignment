const fs = require("fs");
const csv = require("csv-parser");

function getRows(filePath = "./data-sheet.csv") {
  const data = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .on("error", (error) => {
        reject(error);
      })
      .pipe(csv())
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      });
  });
}

module.exports = getRows;
