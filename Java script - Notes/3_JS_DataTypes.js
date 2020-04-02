/*
Dynamic typing:
    JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not 
    directly associated with any particular value type, and any variable can be assigned 
    (and re-assigned) values of all types.
*/
//example
let foo = 42;    // foo is now a number
console.log(typeof foo)
foo     = 'bar'; // foo is now a string
console.log(typeof foo)
foo     = true;  // foo is now a boolean
console.log(typeof foo)
/*
Data and Structure types:
    There are of 9 types :
        Six Data Types that are primitives, checked by typeof operator:
            undefined : typeof instance === "undefined"
            Boolean : typeof instance === "boolean"
            Number : typeof instance === "number"
            String : typeof instance === "string"
            BigInt : typeof instance === "bigint"
            Symbol : typeof instance === "symbol"
        null : 
            typeof instance === "object". Special primitive type having additional 
            usage for it's value: if object is not inherited.
        Object : 
            typeof instance === "object". Special non data but Structural type for 
            any constructed instance instance also used as data structures: new Object, 
            new Array, new Map, new Set, new WeakMap, new WeakSet, new Date and almost 
            everything made with new keyword.
        Function :
            non data structure, though it also answers for typeof operator: 
            typeof instance === "function". This answer is done as a special shorthand 
            for Functions, though every Function constructor is derived from Object constructor.
*/
/*
Primitive values:
    All types except objects define immutable values (that is, values which can't be changed). 
    For example (and unlike in C), Strings are immutable. We refer to values of these types 
    as "primitive values".

Boolean type:
    Boolean represents a logical entity and can have two values: true and false.
*/
//boolean--example
a=true
console.log(a,typeof a)
b=false
console.log(b,typeof b)

//Null type : The Null type has exactly one value: null
//null--example
c=null
console.log(c,typeof c)

//Undefined type: A variable that has not been assigned a value has the value undefined
//undefined-- example
var d
console.log(d,typeof d)

/*
Number type:
    It has two built-in numeric types: Number and BigInt

    The Number type is a double-precision 64-bit binary format IEEE 754 value 
    (numbers between -(253 − 1) and 253 − 1). In addition to representing floating-point 
    numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN 
    ("Not a Number").

BigInt type:
    The BigInt type is a numeric primitive in JavaScript that can represent integers with 
    arbitrary precision. With BigInts, you can safely store and operate on large integers 
    even beyond the safe integer limit for Numbers.

    A BigInt is created by appending n to the end of an integer or by calling the constructor.
*/

//Number and BigInt -- example
e = 10
console.log(e,typeof e)
f=2n ** 53n
console.log(f,typeof f)

/*
String type:
    JavaScript's String type is used to represent textual data. It is a set of "elements" of 
    16-bit unsigned integer values. Each element in the String occupies a position in the String. 
    The first element is at index 0, the next at index 1, and so on. The length of a String is 
    the number of elements in it.
*/
//string-- example
g= 'hello!!!'
console.log(g,typeof g)

/*
Objects:
    In JavaScript, objects can be seen as a collection of properties. With the object literal 
    syntax, a limited set of properties are initialized; then properties can be added and removed. 
    Property values can be values of any type, including other objects, which enables building 
    complex data structures. Properties are identified using key values. A key value is either 
    a String or a Symbol value.
*/

//object(JSON) -- example
h={1:'value'}
console.log(h,typeof h)