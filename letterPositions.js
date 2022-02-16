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

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));