
const assertEqual = require('./assertEqual');

// Create a function head which returns the first item in the array.

const head = function(array) {
  let firstElement = array[0];
  return firstElement;

};
//console.log(firstElement);
// console.log(head([5,6,7]), 5);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["this", "is", "a", "test"]), "this");
assertEqual(head([42, 21, 0]), 42);

  
