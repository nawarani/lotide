const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertEqualArray = (actual, expected) => {
  assertEqual(actual.length, expected.length);
  for (let i in actual) {
    assertEqual(actual[i], expected[i]);
  }
};

const tail = (arr) => {
  return arr.slice(1);
};

// test cases
console.log('original array length test');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqualArray(result, ["Lighthouse", "Labs"]);
