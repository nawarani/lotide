// Assertion Failed: Lighthouse Labs !== Bootcamp
// Assertion Passed: 1 === 1


// 🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp
// ✅✅✅ Assertion Passed: 1 === 1

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//     Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
//     Comparing identical numbers
assertEqual(1, 1);
//     Comparing identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs");
//     Comparing non-identical numbers
assertEqual(1, 4);
assertEqual();
assertEqual(1);
assertEqual(1,);


