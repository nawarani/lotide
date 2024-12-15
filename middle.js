const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = (arr) => {
  // if array is smaller than 3 elements, return empty array
  let len = arr.length;
  if (len < 3) {
    return [];
  } else if (len % 2 === 0) {
    // if array has even length(eg 6), return array with elements in
    // half of length - 1 (2) and half of length (3)
    return [arr[(len / 2) - 1], arr[len / 2]];
  } else {
    // if array has odd length (eg 5), return array with element in
    // the index half of (length - 1) => (2)
    return [arr[(len - 1) / 2]];
  }
};

module.exports = middle;

