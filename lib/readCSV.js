const neatCsv = require("neat-csv");
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);

async function readCSV(filename, sortCb = null) {
  const dirPath = path.join(__dirname, `/${filename}`);
  try {
    const data = await readFile(filename);
    const stores = await neatCsv(data);
    return stores;
  } catch (error) {
    return Promise.reject(`Problem reading ${filename}`);
  }
}

module.exports = readCSV;
