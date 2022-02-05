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


const assertArraysEqual = function(array1, array2) {
  const result = eqArrays(array1, array2);

  if (result === true) {
    console.log(`✅✅✅Asserstion Passed: ${array1} === ${array2}.`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${array1} !== ${array2}.`);
  }
};


const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
    
    // while (callback(item) === false) {
    //   results.push(array[item]);
    // }
  }
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// // console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, expectedResults);
console.log(results2);