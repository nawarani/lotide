const takeUntil = require("../takeUntil");
const assertArraysEqual = require("../assertArraysEqual");
// test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

// empty
const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
assertArraysEqual(results3, []);

// first item truthy + duplicate truthy
const data4 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results4 = takeUntil(data4, x => x === 'I\'ve');
assertArraysEqual(results4, []);

// last item truthy
const data5 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results5 = takeUntil(data5, x => x === 'Redwood');
assertArraysEqual(results5, [ "I've", "been", "to", "Hollywood", ",", "I've", "been", "to"]);

// no truthy
const data6 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results6 = takeUntil(data6, x => x === '8');
assertArraysEqual(results6, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);