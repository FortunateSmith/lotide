const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  //alternate to line 8 would be to create variables, eg. const object1Keys = Object.keys(object1)

  //compares number of keys in two separate objects
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loops through object1
  for (const key of Object.keys(object1)) {
    //checks for arrays in the objects
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } //if not array checks for primitives
    if (object1[key] !== object2[key]) {
      return false;
    }

  }//if false is not hit, all correct, returns true
  return true;
};

module.exports = eqObjects;

// TEST CODE
// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };

// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const ac = { a: '1', c: '2' };
// assertEqual(eqObjects(ab, ac), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2",3],  c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false