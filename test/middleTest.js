const assert = require('chai').assert;
const middle = require("../middle");

// test cases

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("does not alter the original function", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    middle(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });
});