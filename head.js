
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
};

// Create a function head which returns the first item in the array.

const head = function(array) {
  let firstElement = array[0];
  return firstElement;

}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["this", "is", "a", "test"]), "this");
assertEqual(head([42, 21, 0]), 42);

  
