const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
  
};


const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);

  if (result === true) {
    console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  }
};


const words = ['the', 'finger', 'that', 'points', 'at', 'the', 'moon']
const map = function(array, callback) {
  const results = []
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const result1 = map(words, word => word[0]);
console.log(result1);

assertArraysEqual(result1, true);