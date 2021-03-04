const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {// make a loop that goes through the function
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
        } else {
      results[sentence[i]] = [i];
    }
  } 
  return results;
};

console.log(letterPositions("lighthouse in the house").o);