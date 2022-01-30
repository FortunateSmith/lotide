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

const without = function(source, itemsToRemove) {
  let result = [];
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  
  return result;
};

console.log(without([1, 2, 3],[1,5])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));

//return source.filter(element => !itemsToRemove.includes(element)) => code Matt demonstrated to do function on a single line.

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));