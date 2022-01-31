
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

const middle = function(array) {
  let midElem = [];
  if (array.length > 2 && array.length % 2 === 1) {
    midElem.push(array[(array.length-1)/2]);
    } else if (array.length > 2 && array.length % 2 === 0) {
      midElem.push(array[(array.length/2) - 1]);
      midElem.push(array[array.length/2]);
  } 
  return midElem;
}

console.log(assertArraysEqual(middle([7, 3 ,9]),[3]));
console.log(assertArraysEqual(middle([1, 7, 9]), [7]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 'hello', 4]), [2, 'hello']));