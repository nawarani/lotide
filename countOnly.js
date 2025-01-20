// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // iterate through names array
  for (let item of allItems) {
    // if name is supposed to be counted accoridng to the object
    if (itemsToCount[item]) {
      // and if the item is being counted the first time
      if (results[item]) {
        //set the count to 1
        results[item] += 1;
      } else {
        // if its been counted before, add 1 to count
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
