// Implement a function eqArrays which takes two arrays and returns true or false, based on a perfect match
// Create a loop to loop over each array, taking the numbers out to check if they match the other array
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

