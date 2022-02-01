const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
};

// return unique chars in string
const countLetters = function(string) {
  const newString = string.split(' ').join('');
  console.log(newString)
  // return # of instances of unique letters
  const counter = {};

  //loop through string
  for (const character of newString) {
    //console.log(character);
    if (counter[character]) {
      counter[character] += 1
    } else {
      counter[character] = 1
    }
  }
return counter;

}

console.log(countLetters("lighthouse in the house"));