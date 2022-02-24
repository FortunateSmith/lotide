const eqArrays = require('./eqArrays');

//returns boolean result of eqArrays
const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);

  if (result === true) {
    console.log(`✅✅✅Asserstion Passed: ${array1} === ${array2}.`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${array1} !== ${array2}.`);
  }
};

module.exports = assertArraysEqual;