const assertEqual = require('../assertEqual');
const tail = require('../tail');

const equals = tail([1,2,3])
assertEqual(equals[0], 2);

const string = tail(["Yo Yo", "Lighthouse","Labs"])
assertEqual(string[0], "Lighthouse");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

assertEqual(tail([]),);