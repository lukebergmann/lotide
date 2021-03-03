const eqArrays = function (arrayOne, arrayTwo) {
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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function (source, itemsToRemove) {
  let removedItems = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      removedItems.push(source[i]);
    }
  }
  return removedItems
};


without([1, 2, 3], [1, 2]);
assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);