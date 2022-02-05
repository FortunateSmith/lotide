
//can only compare primitive data types
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅Asserstion Passed: ${actual} === ${expected}.`)
    : console.log(`🛑🛑🛑Asserstion Failed: ${actual} !== ${expected}.`);
  
};

assertEqual('Two Pair of Dice', 'Too Paradise');
assertEqual('Unique New York', 'Unique New York');
assertEqual(1, 10);
assertEqual(42, 42);

