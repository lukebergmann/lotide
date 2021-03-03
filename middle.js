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

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {  

  if (array.length <= 2) {
    return [];
  } 
  
  if (array.length % 2 === 0 ) {
    return array.slice(Math.floor((array.length - 1) / 2), Math.floor(((array.length) / 2)) + 1);
  } else {
    return array[(array.length - 1) / 2]
  }

};
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]
