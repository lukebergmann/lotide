const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual'); 

assertArraysEqual(tail(["1", "2", "3"]), ["2", "3"]);
assertArraysEqual(tail(["1", "5", "3"]), ["2", "3"]);
assertArraysEqual(tail(["1", "7", "3"]), ["2", "3"]);