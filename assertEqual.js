// Assertion Failed: Lighthouse Labs !== Bootcamp
// Assertion Passed: 1 === 1


// 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
// ✅✅✅ Assertion Passed: 1 === 1

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// TEST CODE
//     Comparing non-identical strings
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
//     Comparing identical numbers
console.log(assertEqual(1, 1));
//     Comparing identical strings
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
//     Comparing non-identical numbers
console.log(assertEqual(1, 4));
console.log(assertEqual());
console.log(assertEqual(1));
console.log(assertEqual(1,));


