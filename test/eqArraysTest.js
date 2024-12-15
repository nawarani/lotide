const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// test cases
// empty Arrays
assertEqual(eqArrays([], []), true);
// one empty array in position 1
assertEqual(eqArrays([], [1, 2, 3]), false);
// empty array in position 2
assertEqual(eqArrays([1, 2, 3], []), false);
// equal arrays, good case
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// equal array not matching Element
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// unmatched elem in first position
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
// unmatched elem in last position
assertEqual(eqArrays([1, 2, 3], [1, 2, 1]), false);
// matched elem, unmatched length
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);