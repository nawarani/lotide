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



// test cases
// empty
assertArraysEqual(middle([]), []);
// one elem
assertArraysEqual(middle([1]), []);
// two elem
assertArraysEqual(middle([1, 2]), []);
// odd elem
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// even elem
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
