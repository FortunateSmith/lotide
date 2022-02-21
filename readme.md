# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @liamsmith/lotide`

**Require it:**

`const _ = require('@liamsmith/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual - Evaluates if two arrays are equal
* assertEqual - Evaluates if the two primitive inputs are equal
* assertObjectsEqual - Evaluates if the two objects are equal
* countLetters - Creates an object from string input counting the number of times a given letter appears
* countOnly - Counts the number of times a given element occurs in an array of items.
* eqArrays - Evaluates whether two input arrays are equal
* eqObjects - Evalutes whether two given objects are equal
* findKey - Finds the key in an object with the user provided condition
* findKeyByValue - Find the key of a user provided object and a value
* flatten - Creates a single array from nested array, only functional with one level
* head - Outputs the first element of an array
* letterPositions - Outputs the index of all the letters in a string
* map - Provides new array from the given array and a codition
* middle - Outputs the middle elements from an array
* tail - Outputs a new array without the first element of the input array
* takeUntil - creates new array including all items up to item given as arg in callback
* without - creates new array removing items that appear in both first arg and second arg arrays