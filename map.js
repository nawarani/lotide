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

const map = (arr, callback) => {
  const newArr = [];
  for (let element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
};

// test cases
// good case
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// empty
assertArraysEqual(map([], (x) => x[0]), []);

// no change func
assertArraysEqual(map(words, (x) => x), words);



