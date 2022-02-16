const assertEqual = require('../assertEqual');
const head = require('../head')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["this", "is", "a", "test"]), "this");
assertEqual(head([42, 21, 0]), 42);