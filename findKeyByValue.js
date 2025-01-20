const findKeyByValue = (obj, val) => {
  // return first key that has the value
  for (let key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;