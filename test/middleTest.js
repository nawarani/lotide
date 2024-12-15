const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// test cases
// empty
assertArraysEqual(middle([]), []);
// one elem
assertArraysEqual(middle([1]), []);
// two elem
assertArraysEqual(middle([1, 2]), []);
// odd elem
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// even elem
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);