const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
head(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
