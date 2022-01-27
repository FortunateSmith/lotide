const assertEqual = function(actual, expected) {
  actual === expected ? console.log("✅✅✅Asserstion Passed: " + actual + " === " + expected)
    : console.log("🛑🛑🛑Asserstion Failed: " + actual + " !== " + expected);
  
};

console.log(assertEqual('Two Pair of Dice', 'Too Paradise'));
console.log(assertEqual('Unique New York', 'Unique New York'));
console.log(assertEqual(1, 10));
console.log(assertEqual(42, 42));
