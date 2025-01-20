const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");
// test cases
// hello
assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);

// hello world
assertArraysEqual(letterPositions('hello world')['h'], [0]);
assertArraysEqual(letterPositions('hello world')['e'], [1]);
assertArraysEqual(letterPositions('hello world')['l'], [2, 3, 9]);
assertArraysEqual(letterPositions('hello world')['o'], [4, 7]);
assertArraysEqual(letterPositions('hello world')['w'], [6]);
assertArraysEqual(letterPositions('hello world')['r'], [8]);
assertArraysEqual(letterPositions('hello world')['d'], [10]);