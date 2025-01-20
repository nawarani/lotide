const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  // check if they have the same number of keys
  if (!eqArrays(Object.keys(object1).sort(), Object.keys(object2).sort())) {
    return false;
  }
  // since they have the same number of keys, iterating through either of them should be fine.
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


