// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
//     : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
// };

const assertArraysEqual = function(array1, array2) {

  if (array1.length !== array2.length) {
    return '🛑🛑🛑Asserstion Failed';
  }
  for (i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return '🛑🛑🛑Asserstion Failed';
    }
  }return '✅✅✅Asserstion Passed';
  
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));// => false

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢 
console.log(assertArraysEqual(["A string"], ["A different string"])); //🔴
console.log(assertArraysEqual(["A string with a length"], ["Dif string same length"])); //🔴
console.log(assertArraysEqual([1], ["1"])); //🔴
console.log(assertArraysEqual([1], [1])); //🟢 
console.log(assertArraysEqual([1], [0])); //🔴
console.log(assertArraysEqual([false], [0])); //🔴
console.log(assertArraysEqual([true], [true])); //🟢