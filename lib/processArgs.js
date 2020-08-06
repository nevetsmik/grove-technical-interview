#!/usr/bin/env node
const doc = `
Usage:
  ./find_store.js --address=<address>
  ./find_store.js --address=<address> [--units=(mile|km)] [--output=(text|json)]
  ./find_store.js --zip=<zip>
  ./find_store.js --zip=<zip> [--units=(mile|km)] [--output=(text|json)]

Options:
  --zip=<zip>            Find nearest store to this zip code. If there are multiple best-matches, return the first.
  --address="<address>"  Find nearest store to this address. If there are multiple best-matches, return the first.
  --units=(mile|km)      Display units in miles or kilometers [default: mile]
  --output=(text|json)   Output in human-readable text, or in JSON (e.g. machine-readable) [default: text]
`;

const { docopt } = require("docopt");
const args = docopt(doc);
const address = args["--address"] || null;
const output = args["--output"];
const units = args["--units"];
const zip = args["--zip"] || null;

module.exports = {
  address,
  output,
  units,
  zip,
};
