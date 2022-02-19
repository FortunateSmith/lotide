const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};


module.exports = findKey;


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma');

