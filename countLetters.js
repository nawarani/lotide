const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = (sentence) => {
  const output = {};
  for (let char of sentence) {
    if (char.match(/\w/)) {
      if (output[char]) {
        output[char] += 1;
      } else {
        output[char] = 1;
      }
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("lighthouse in the House"));

