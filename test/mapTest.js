const map = require("../map");
const assertArraysEqual = require("../assertArraysEqual");


// test cases
// good case
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// empty
assertArraysEqual(map([], (x) => x[0]), []);

// no change func
assertArraysEqual(map(words, (x) => x), words);