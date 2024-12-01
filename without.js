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

// Implement without which will return a subset of a given array,
// removing unwanted elements.
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const without = (arr, arrtoRemove) => {
//   let arrWithout = arr.slice();
//   let delInd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arrtoRemove.includes(arr[i])) {
//       arrWithout.splice((i - delInd), 1);
//       delInd += 1;
//     }
//   }
//   return arrWithout;
// };

// push method, this is less mind bending
const without = (arr, arrtoRemove) => {
  let arrWithout = [];
  for (let elem of arr) {
    if (!(arrtoRemove.includes(elem))) {
      arrWithout.push(elem);
    }
  }
  return arrWithout;
};


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

