const assertEqual = require("../assertEqual");
const tail = require("../tail");

// test cases
console.log('original array length test');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

console.log('New example');
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
actual = result;
expected = ["Lighthouse", "Labs"];
assertEqual(actual.length, expected.length);
for (let i in actual) {
  assertEqual(actual[i], expected[i]);
};