const assert = require('chai').assert;
const head = require('../head');

describe('grabs the "head", or index[0] of an array', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});

// * Manual Test Code 

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Turkey", "Lighthouse", "Labs"]), "Hello");