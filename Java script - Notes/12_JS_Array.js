/*
Array:

The JavaScript Array class is a global object that is used in the construction
 of arrays; which are high-level, list-like objects.
*/
//common operations

// Create an Array
let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2

// Access (index into) an Array item
let first = fruits[0]
console.log(first)
// Apple
let last = fruits[fruits.length - 1]
console.log(last)
// Banana

// Loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index)
})
// Apple 0
// Banana 1

// Add to the end of an Array
let newLength = fruits.push('Orange')
console.log(newLength)
// ["Apple", "Banana", "Orange"]

// Remove from the end of an Array
let last1 = fruits.pop() // remove Orange (from the end)
console.log(last1)
// ["Apple", "Banana"]

// Remove from the front of an Array
let first1 = fruits.shift() // remove Apple from the front
console.log(first1)
// ["Banana"]

// Add to the front of an Array
let newLength1 = fruits.unshift('Strawberry') // add to the front
console.log(newLength1)
// ["Strawberry", "Banana"]

// Find the index of an item in the Array
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana')
console.log(pos)
// 1

// Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item  
console.log(removedItem)                                     
// ["Strawberry", "Mango"]

// Remove items from an index position
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables)
// ["Cabbage", "Turnip", "Radish", "Carrot"]
let pos1 = 1
let n = 2
let removedItems2 = vegetables.splice(pos1, n)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.
console.log(vegetables)
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems2)
// ["Turnip", "Radish"]

// Copy an Array

let shallowCopy = fruits.slice() // this is how to make a copy
console.log(shallowCopy)
// ["Strawberry", "Mango"]

//Constructor
// Array() -- Creates Array objects.

//Static properties
console.log(fruits.length,typeof fruits)
// Array.length
// The Array constructor's length property whose value is 1.

// methods

console.log(Array.isArray(fruits))
// Array.isArray(value)
// Returns true if value is an array, or false otherwise.

console.log(fruits.copyWithin(fruits,0,2))
// Array.prototype.copyWithin(target[, start[, end]])
// Copies a sequence of array elements within the array.

console.log(fruits.fill('banana',1,3))
// Array.prototype.fill(value[, start[, end]])
// Fills all the elements of an array from a start index to an end index with a static value.

console.log(fruits.pop())
// Array.prototype.pop()
// Removes the last element from an array and returns that element.

console.log(fruits.push('Apple','melon'))
// Array.prototype.push(element1[, ...[, elementN]])
// Adds one or more elements to the end of an array, and returns the new length of the array.

console.log(fruits.reverse())
// Array.prototype.reverse()
// Reverses the order of the elements of an array in place. (First becomes the last, last becomes first.)

console.log(fruits.shift())
// Array.prototype.shift()
// Removes the first element from an array and returns that element.

console.log(fruits.sort())
// Array.prototype.sort()
// Sorts the elements of an array in place and returns the array.

console.log(fruits.splice(fruits,0,2))
// Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// Adds and/or removes elements from an array

console.log(fruits.unshift('guava','orange'))
// Array.prototype.unshift(element1[, ...[, elementN]])
// Adds one or more elements to the front of an array, and returns the new length of the array.


// Accessor methods
// These methods do not modify the array, and return a new array (based on some representation of the original).

console.log(fruits.concat('pineapple','grape'))
// Array.prototype.concat([value1[, value2[, ...[, valueN]]]])
// Returns a new array that is this array joined with other array(s) and/or value(s).

console.log(fruits.includes('Apple',0))
// Array.prototype.includes(valueToFind[, fromIndex])
// Determines whether the array contains valueToFind, returning true or false as appropriate.

console.log(fruits.indexOf('Apple',0))
// Array.prototype.indexOf(searchElement[, fromIndex])
// Returns the first (least) index of an element within the array equal to searchElement, or -1 if none is found.

console.log(fruits.join())
// Array.prototype.join([separator])
// Joins all elements of an array into a string.

console.log(fruits.lastIndexOf('Apple',0))
// Array.prototype.lastIndexOf(searchElement[, fromIndex])
// Returns the last (greatest) index of an element within the array equal to searchElement, or -1 if none is found.

console.log(fruits.slice(0,1))
// Array.prototype.slice([begin[, end]])
// Extracts a section of the calling array and returns a new array.

console.log(fruits.toString())
// Array.prototype.toString()
// Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

console.log(fruits.toLocaleString())
// Array.prototype.toLocaleString()
// Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
