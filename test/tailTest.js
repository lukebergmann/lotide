const assert = require('chai').assert;
const tail = require('../tail');

describe('grabs the "tail, or every index OTHER than index[0] of an array', () => {
  it("returns 2 3 for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(tail(['5']), []); 
  });
});



// * Manual Test Code * //

// assertArraysEqual(tail(["1", "2", "3"]), ["2", "3"]);
// assertArraysEqual(tail(["1", "5", "3"]), ["2", "3"]);
// assertArraysEqual(tail(["1", "7", "3"]), ["2", "3"]);