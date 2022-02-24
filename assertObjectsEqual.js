const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);

  if (result === true) {
    console.log(`✅✅✅Asserstion Passed: ${inspect(actual)} === ${inspect(expected)}.`);
  } else {
    console.log(`🛑🛑🛑Asserstion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);
  }
};

module.exports = assertObjectsEqual;
