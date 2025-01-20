const without = require("../without");
const assertArraysEqual = require("../assertArraysEqual");
// test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// remove nothing
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// remove from empty array
assertArraysEqual(without([], [1]), []);
//check for original array
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
