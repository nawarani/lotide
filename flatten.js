const flatten = (arr) => {
  let flattened = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let subelem of elem) {
        flattened.push(subelem);
      }
    } else {
      flattened.push(elem);
    }
  }
  return flattened;
};

module.exports = flatten;


