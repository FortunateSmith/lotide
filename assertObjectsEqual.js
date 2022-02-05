const eqObjects = function(object1, object2) {
  //const object1Keys = Object.keys(object1)
  if (Object.keys(object1).length !== Object.keys(object2).length) {  //compares number of keys in two separate objects
    return false;
  }
  for (const key of Object.keys(object1)) { //loops object1
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checks for arrays in the objects
      //console.log(object2);
      return eqArrays(object1[key], object2[key]);
    } //if not array checks for primitives
    if (object1[key] !== object2[key]) {
      return false;
    }
      
  }//if false is not hit, all correct, returns true
  return true;
};

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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  if (result === true) {
    console.log(`✅✅✅Asserstion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

assertObjectsEqual({1:'alabaster', 2: 'basalt'}, {1:'alabaster', 2: 'basalt'}); // => true
assertObjectsEqual({1:'alabaster', 2: 'basalt'}, {1:'alabaster', 2: 'basalt', 3: 'corundum'}); // => false
assertObjectsEqual({1:'quartz', 2: ['basalt']}, {1:'quartz', 2: 'basalt'});  //=> false
// assertObjectsEqual({1:'a', 2: [1,2,3]}, {1:'a', 2: [1,2,3]}); // => true
// assertObjectsEqual({1:'apple', 2: 'banana'}, { 2: 'banana',1:'apple'}); //=> true

