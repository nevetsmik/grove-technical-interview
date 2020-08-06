module.exports = (output, storeName, distance, units) => {
  if (output === "text") {
    console.log(`The closest store is ${storeName}: ${distance} ${units}`);
  } else {
    const closestStore = {
      name: storeName,
      distance: `${distance} ${units}`,
    };
    console.log(closestStore);
  }
};
