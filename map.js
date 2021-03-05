const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayTwo[i] !== arrayOne[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const result1 = map(words, word => word[0]);
console.log(result1);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
const result3 = map(words, word => word + " - David Bowie = G.O.A.T");
console.log(result3)



