const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([7, 3 ,9]),[3]);
assertArraysEqual(middle([1, 7, 9]), [7]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 'hello', 4]), [2, 'hello']);