const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');  

assertArraysEqual(middle(["1", "7", "3"]), ["7"]);
assertArraysEqual(middle(["1"]), []);
assertArraysEqual(middle(["1", "7", "3", "4"]), ["7", "3"]);