const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};




const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(Object.keys(bestTVShowsByGenre));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);