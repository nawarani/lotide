const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i in actual) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = (arr) => {
  let flattened = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      for (let subelem of elem) {
        flattened.push(subelem);
      }
    } else {
      flattened.push(elem);
    }
  }
  return flattened;
};

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


