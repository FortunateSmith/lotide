const assertArraysEqual = require('./assertArraysEqual');

// returns new array from given array and condition
const words = ['the', 'finger', 'that', 'points', 'at', 'the', 'moon'];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// TEST CODE
const result1 = map(words, word => word[0]);
assertArraysEqual(result1, ['t', 'f', 't', 'p', 'a', 't', 'm']);

module.exports = map;