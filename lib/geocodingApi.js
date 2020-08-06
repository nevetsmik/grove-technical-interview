const axios = require("axios");

async function getLatLong(apiKey, url, location) {
  try {
    const {
      data: { results },
    } = await axios.get(url, {
      params: {
        address: location.split(" ").join("+"),
        key: apiKey,
      },
    });
    if (results.length === 0) return Promise.reject("Zero results - check address/zip");
    const {
      geometry: {
        location: { lat, lng },
      },
    } = results[0];
    return { lat, lng };
  } catch (error) {
    return Promise.reject("Problem with API. Please try again later");
  }
}

module.exports = getLatLong;
