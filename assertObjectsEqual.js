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


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🤩🤩🤩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  let result = true;

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if ((Array.isArray(object1[key] && object2[key]))) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return result;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const dog1 = {
  size: "large",
  color: "brown",
  friendliness: 9.5,
  goodness: 4
}
const dog2 = {
  size: "large",
  color: "brown",
  friendliness: 9.5,
  goodness: 4
}

assertObjectsEqual(dog1, dog2);

