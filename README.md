# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nawarani/lotide`

**Require it:**

`const _ = require('@nawarani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr)`: Returns the first element of the array
- `tail(arr)`: Returns the last element of the array
- `assertArraysEqual(arrActual, arrExpected)`: Console logs an assertion statement on whether arrActual is the same as arrExpected
- `assertEqual(actual, expected)`: Console logs an assertion statement on whether actual is the same as expected
- `assertObjectsEqual(objActual, objExpected)`: Console logs an assertion statement on whether objActual is the same as objExpected
- `countLetters(sentence)`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `countOnly(arrItems, itemsToCount)`: Takes in an array and then returns a count of each of the items in itemsToCount only.
- `eqArrays(arrActual, arrExpected)`: Returns a boolean asserting whether arrActual is the same as arrExpected
- `eqObjects(objActual, objExpected)`: Returns a boolean asserting whether objActual is the same as objExpected
- `findKey(obj, callback)`: Takes in an object and callback and returns the first key that meets the criteria specified in callback.
- `findKeyByValue(obj, val)`: Takes in an object and a value and returns the first key that corresponds to that value.
- `flatten(arr)`: Takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
- `letterPositions(str)`: Takes in a string and returns all indices of letter positions in the string.
- `map(arr, callback)`: Takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
- `takeUntil(arr, callback)`: Takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
- `without(source, itemsToRemove)`: Takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
