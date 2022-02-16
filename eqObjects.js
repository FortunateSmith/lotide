const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
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

module.exports = eqObjects;

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const ac = { a: '1', c: '2' };
assertEqual(eqObjects(ab, ac), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2",3],  c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false