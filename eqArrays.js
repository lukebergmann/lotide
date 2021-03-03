// Implement a function eqArrays which takes two arrays and returns true or false, based on a perfect match

// create a loop to loop over each array, taking the numbers out to check if they match the other array


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arrayOne, arrayTwo)  {
  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < arrayOne.length; i++) {
    firstArray = arrayOne[i];
  }
  for (let j = 0; j < arrayTwo.length; j++)  {
    secondArray = arrayTwo[j];
  }
  if (firstArray === secondArray) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false