const assert = require('chai').assert;
const tail = require("../tail");

// test cases
describe('#tail', () => {
  it(`does not alter the original array`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("returns [] for []", () => {
    const words = [];
    assert.deepEqual(tail(words), []);
  });

  it("returns [] for ['Lighthouse']", () => {
    const words = ['Lighthouse'];
    assert.deepEqual(tail(words), []);
  });

  it("returns ['Labs'] for ['Lighthouse', 'Labs']", () => {
    const words = ['Lighthouse', 'Labs'];
    assert.deepEqual(tail(words), ['Labs']);
  });
});