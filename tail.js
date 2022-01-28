
const tail = function(array) {
  let newArr = array.slice(1); // assigning the tail of the original array to a new array.
  return newArr;
};


const words = ["Yo Yo", "Lighthouse", "Labs"]; //variable.
tail(words); //variable called to tail function.
 

const assertEqual = function(actual, expected) {
  actual.toString() === expected.toString() ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}`);
  
};

assertEqual(tail([1,2,3]), [2,3]);
assertEqual(tail(words), ["Lighthouse","Labs"]);