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

module.exports = countLetters;

