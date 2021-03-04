const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(sentence) {
  let counted = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!counted[sentence[i]]){  // if key sentence[i] does not exist --> false
      counted[sentence[i]] = 1 // {sentence[i]: 1} --> key = sentence[i], val = 1
    } else {
      counted[sentence[i]] += 1;
    }
  }
  return counted;
};
console.log(countLetters('LHL'));
