const assertArraysEqual = require("../assertArraysEqual")
// test cases
// empty Arrays
assertArraysEqual([], []);
// one empty array in position 1
assertArraysEqual([], [1, 2, 3]);
// empty array in position 2
assertArraysEqual([1, 2, 3], []);
// equal arrays, good case
assertArraysEqual([1, 2, 3], [1, 2, 3]);
// equal array not matching Element
assertArraysEqual([1, 2, 3], [3, 2, 1]);
// unmatched elem in first position
assertArraysEqual([1, 2, 3], [3, 2, 3]);
// unmatched elem in last position
assertArraysEqual([1, 2, 3], [1, 2, 1]);
// matched elem, unmatched length
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);