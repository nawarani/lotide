const assertEqual = require("../assertEqual");
const tail = require("../tail");

// test cases
console.log('original array length test');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

console.log('Happy path');
const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
actual = result;
expected = ["Lighthouse", "Labs"];
assertEqual(actual.length, expected.length);
for (let i in actual) {
  assertEqual(actual[i], expected[i]);
};

console.log('Empty');
const result2 = tail([]);
actual = result2;
expected = [];
assertEqual(actual.length, expected.length);
for (let i in actual) {
  assertEqual(actual[i], expected[i]);
};

console.log('One element');
const result3 = tail(['a']);
actual = result3;
expected = [];
assertEqual(actual.length, expected.length);
for (let i in actual) {
  assertEqual(actual[i], expected[i]);
};