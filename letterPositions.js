const assertObjectsEqual = require('./assertObjectsEqual');
const letterPositions = function(sentence) {

  const results = {};
  const newString = sentence.split(' ').join('');
  
  for (let i = 0; i < newString.length; i++) {
    let key = newString[i];
    //if (results[key] === undefined) initializes empty array within results
    if (results[key] === undefined) {
      results[key] = [i];
    } else {
      //pushes all other instances after fist index of letter
      results[key].push(i);
    }
   
  }
  return results;
};

// TEST CODE
assertObjectsEqual(letterPositions("lighthouse in the house"), {
  l: [ 0 ],
  i: [ 1, 10 ],
  g: [ 2 ],
  h: [ 3, 5, 13, 15 ],
  t: [ 4, 12 ],
  o: [ 6, 16 ],
  u: [ 7, 17 ],
  s: [ 8, 18 ],
  e: [ 9, 14, 19 ],
  n: [ 11 ]
});

module.exports = letterPositions;