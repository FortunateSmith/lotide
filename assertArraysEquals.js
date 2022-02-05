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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// 🟢
// assertArraysEqual(["A string"], ["A different string"]); //🔴
// assertArraysEqual(["A string with a length"], ["Dif string same length"]); //🔴
// assertArraysEqual([1], ["1"]); //🔴
// assertArraysEqual([1], [1]); //🟢
// assertArraysEqual([1], [0]); //🔴
// assertArraysEqual([false], [0]); //🔴
// assertArraysEqual([true], [true]); //🟢