/*
Object:
    The Object class represents one of JavaScript's data types. It is used to store 
    various keyed collections and more complex entities. Objects can be created using 
    the Object() constructor or the object initializer / literal syntax.

The Object constructor creates an object wrapper for the given value.

If the value is null or undefined, it will create and return an empty object.
Otherwise, it will return an object of a Type that corresponds to the given value.
If the value is an object already, it will return the value.

Constructor:

Object() -
The Object constructor creates an object wrapper for the given value.
*/
object = Object.create(null)
// object.create('hello')
//Properties

console.log(object.length,typeof object,object)
// Object.length

//methods

newobj = object.create()
console.log(newobj)
// Object.create()
// Creates a new object with the specified prototype object and properties.

console.log(object.entries())
// Object.entries()
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

console.log(object.freeze())
// Object.freeze()
// Freezes an object. Other code cannot delete or change its properties.

console.log(object.fromEntries())
// Object.fromEntries()
// Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

console.log(object.getOwnPropertyDescriptor())
// Object.getOwnPropertyDescriptor()
// Returns a property descriptor for a named property on an object.

console.log(object.getOwnPropertyDescriptors())
// Object.getOwnPropertyDescriptors()
// Returns an object containing all own property descriptors for an object.

console.log(object.getOwnPropertyNames())
// Object.getOwnPropertyNames()
// Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

console.log(object.getOwnPropertySymbols())
// Object.getOwnPropertySymbols()
// Returns an array of all symbol properties found directly upon a given object.

console.log(object.getPrototypeOf())
// Object.getPrototypeOf()
// Returns the prototype (internal [[Prototype]] property) of the specified object.

console.log(object.is())
// Object.is()
// Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

console.log(object.isExtensible())
// Object.isExtensible()
// Determines if extending of an object is allowed.

console.log(object.isFrozen())
// Object.isFrozen()
// Determines if an object was frozen.

console.log(object.isSealed())
// Object.isSealed()
// Determines if an object is sealed.

console.log(object.keys())
// Object.keys()
// Returns an array containing the names of all of the given object's own enumerable string properties.

console.log(object.preventExtensions())
// Object.preventExtensions()
// Prevents any extensions of an object.

console.log(object.seal())
// Object.seal()
// Prevents other code from deleting properties of an object.

console.log(object.setPrototypeOf())
// Object.setPrototypeOf()
// Sets the object's prototype (its internal [[Prototype]] property).

console.log(object.values())
// Object.values()
// Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
