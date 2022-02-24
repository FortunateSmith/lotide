const assertArraysEqual = require('./assertArraysEqual');

// creates new array with all items up to specified callback item
const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);

  }
};


// Test Code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expectedResults1);

console.log('---');

// Test Code
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, expectedResults2);


module.exports = takeUntil;