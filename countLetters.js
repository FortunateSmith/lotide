const assertObjectsEqual = require("./assertObjectsEqual");

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

assertObjectsEqual(countLetters("lighthouse in the house"), {
  l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,
});

assertObjectsEqual(countLetters('craterellus cornucopioides'), {
  c: 3, r: 3, a: 1, t: 1, e: 3, l: 2, u: 2, s: 2, o: 3, n: 1, p: 1, i: 2, d: 1
});
module.exports = countLetters;