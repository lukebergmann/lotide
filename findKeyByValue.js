const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
};
// create a function that has two parameters in it. An object and a value
function findKeyByValue(obj, val) {
//create a variable that holds the object key value pairs
let objectEntries = Object.entries(obj);
// create a  for..of loop that iterates through the object
  for (let [key, value] of objectEntries) {
//create a conditional that checks if the value we found in the object is the same as the value in the parameter
    if (val === value) {
//return the key that the value belongs to
      return key;
    }
    }
  }


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
}


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);