const { getDistance } = require("geolib");

const geolib = require("geolib").getDistance;

module.exports = (stores, inputLocation) => {
  stores.sort((a, b) => {
    const aTo = {
      latitude: a.Latitude,
      longitude: a.Longitude,
    };
    const bTo = {
      latitude: b.Latitude,
      longitude: b.Longitude,
    };
    return getDistance(inputLocation, aTo) - getDistance(inputLocation, bTo);
  });
  const { ["Store Name"]: storeName, Latitude: latitude, Longitude: longitude } = stores[0];
  return {
    storeName,
    closestLocation: { latitude, longitude },
  };
};
