# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lukebergmann/lotide`

**Require it:**

`const _ = require('@lukebergmann/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

 * `assertArraysEqual(actual, expected)`: A function which takes in two arrays and console.log an appropriate message to the console.
* `assertEqual(actual, expected)`: A function that compares the two values it takes in.
* `assertObjectsEqual(arrayOne, arrayTwo)`: A function which takes in two objects and console.log's an appropriate message to the console.
* `countLetters(sentence)`: A function that takes in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(allItems, itemsToCount)`: A function that takes in a collection of items and returns a counts for a specific subset of those items.
* `eqArrays(arrayOne, arrayTwo)`: A function which takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: A function which takes in two objects and returns true or false, based on a perfect match.
* `findKey(obj, callback)`: A function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(obj, val)`: A function that scans an object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `head(array)`: A function which returns the first item in the array.
* `letterPositions(sentence)`:A function that will return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: A function that returns a new array based on the results of the callback function.
* `middle(array)`: A function that which returns the center most item in an array. If items in an array are even, take the middle two elements. If the items in the array are 2 or less, return an empty array. 
* `tail(array)`: A function which returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil(array, callback)`: A function that returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(source, itemsToRemove)`: A function which returns a subset of a given array, removing unwanted elements.