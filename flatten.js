const assertArraysEqual = require('./assertArraysEqual');

// flattens nested arrays into single array only one level down
const flatten = function(array) {
  let flatArray = array.flat();
  return flatArray;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(['one', 12, ['day'], 14, 15, ['soon']]), ['one', 12, 'day', 14, 15, 'soon']);

module.exports = flatten;