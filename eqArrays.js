const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const eqArrays = (actual, expected) => {
//   // basic idea: false = 0, true = 1. In a product a*b*c ..... if any of the values are
//   // falso/0, the product will be zero. So I'm just going to multiply all the
//   // results  from comparing the length and then each element,
//   // then return that.
//   let eq = (actual.length === expected.length);
//   for (let i in actual) {
//     eq *= (actual[i] === expected[i]);
//   }
//   //the product becomes a number, so it has to be coerced back to bool.
//   return Boolean(eq);
// };

// alternatively, we can set the result to true and turn it to false on the
// first occurance of unmatch
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