
const eqArrays = function(arrayOne, arrayTwo) {
  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    firstArray = arrayOne[i];
  }
  for (let j = 0; j < arrayTwo.length; j++) {
    secondArray = arrayTwo[j];
  }
  if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual([1, 2, 3], [1, 2, 3]);