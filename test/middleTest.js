const assert = require('chai').assert;
const middle = require('../middle');

describe('grabs the "tail, or every index OTHER than index[0] of an array', () => {
  it("returns 2  for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
  it("returns '2 3' for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});



// * Manual Test Code * // 
// assertArraysEqual(middle(["1", "7", "3"]), ["7"]);
// assertArraysEqual(middle(["1"]), []);
// assertArraysEqual(middle(["1", "7", "3", "4"]), ["7", "3"]);