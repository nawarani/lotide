const flatten = require("../flatten");
const assertArraysEqual = require("../assertArraysEqual");
// test cases
// good case
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// empty case
assertArraysEqual(flatten([]), []);
// empty subelem case
assertArraysEqual(flatten([1, 2, [], 5, [6]]), [1, 2, 5, 6]);
assertArraysEqual(flatten([[]]), []);
// no nested case
assertArraysEqual(flatten([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);