const assertObjectsEqual = require("./assertObjectsEqual");

const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
};

// return unique chars in string
const countLetters = function(string) {
  const newString = string.split(' ').join('');
  console.log(newString);
  // return # of instances of unique letters
  const counter = {};

  //loop through string
  for (const character of newString) {
    //console.log(character);
    if (counter[character]) {
      counter[character] += 1;
    } else {
      counter[character] = 1;
    }
  }
  return counter;

};
module.exports = countLetters;
assertObjectsEqual(countLetters("lighthouse in the house"), {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}); 
console.log(countLetters("lighthouse in the house"));