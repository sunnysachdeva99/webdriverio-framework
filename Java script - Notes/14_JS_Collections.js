/*
Keyed collections:
 
Maps:

ECMAScript 2015 introduces a new data structure to map values to values. A Map object is a 
simple key/value map and can iterate its elements in insertion order.

The following code shows some basic operations with a Map. See also the Map reference page 
for more examples and the complete API. You can use a for...of loop to return an array of 
[key, value] for each iteration.

*/

//example
let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0 

/*

sets:


Set objects are collections of values. You can iterate its elements in insertion order. 
A value in a Set may only occur once; it is unique in the Set's collection.

The following code shows some basic operations with a Set. See also the Set reference page 
for more examples and the complete API.

*/
//example
let mySet = new Set();
mySet.add(1);
mySet.add('some text');
mySet.add('foo');

mySet.has(1); // true
mySet.delete('foo');
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"

/* Indexed collections

Array object:

An array is an ordered set of values that you refer to with a name and an index.

For example, consider an array called emp, which contains employees' names indexed 
by their numerical employee number. So emp[1] would be employee number one, emp[2] 
employee number two, and so on.

JavaScript does not have an explicit array data type. However, you can use the predefined 
Array object and its methods to work with arrays in your applications. The Array object has 
methods for manipulating arrays in various ways, such as joining, reversing, and sorting them. 
It has a property for determining the array length and other properties for use with regular 
expressions.

*/
//all the examples about arrays are discussed earlier