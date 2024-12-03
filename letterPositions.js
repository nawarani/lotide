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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char.match(/\w/)) {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

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

