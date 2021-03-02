const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
};

// first create new array

// new array = tail elements

// return new array


const tail = function(array) {
  const updatedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      updatedArray.push(array[i]);
    }
  }
  console.log(updatedArray);
  return updatedArray;
};


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!