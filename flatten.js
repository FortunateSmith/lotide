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

  if (array1.length !== array2.length) {
    return '🛑🛑🛑Asserstion Failed';
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return '🛑🛑🛑Asserstion Failed';
    }
  } return '✅✅✅Asserstion Passed';
  
};


const flatten = function(array){
  let flatArray = array.flat()
  return flatArray
}

module.exports = flatten;

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
