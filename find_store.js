#!/usr/bin/env node
require("dotenv").config();

const haversine = require("haversine");
const { address, output, units, zip } = require("./lib/processArgs");
const readCSV = require("./lib/readCSV");
const geocodingApi = require("./lib/geocodingApi");
const sortByDistanceFromInputLatLog = require("./lib/sortByDistanceFromInputLatLog");
const displayResults = require("./lib/displayResults");

const geoCodingApiUrl = "https://maps.googleapis.com/maps/api/geocode/json";
const apiKey = process.env.API_KEY;

const csvFile = "store-locations.csv";

const location = address || zip;

const run = async (csvFileName) => {
  try {
    const stores = await readCSV(csvFileName);
    const { lat: inputLat, lng: inputLng } = await geocodingApi(apiKey, geoCodingApiUrl, location);
    const inputLocation = { latitude: inputLat, longitude: inputLng };
    const { storeName, closestLocation } = sortByDistanceFromInputLatLog(stores, inputLocation);
    const distance = haversine(inputLocation, closestLocation, {
      unit: units,
    }).toFixed(2);
    displayResults(output, storeName, distance, units);
  } catch (error) {
    console.error(error);
  }
};

run(csvFile);
