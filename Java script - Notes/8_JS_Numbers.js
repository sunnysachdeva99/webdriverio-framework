/*
Number:

The Number JavaScript object is a wrapper object allowing you to work with 
numerical values. A Number object is created using the Number() constructor. 
A primitive type object number is created using the Number() function.

The primary uses of the Number object are:

If the argument cannot be converted into a number, it returns NaN.
In a non-constructor context (i.e., without the new operator), Number can be used to perform a type conversion.

Constructor:

Number()--Creates a new Number object.
*/
num =  Number();
console.log(typeof num);

//Properties
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//Methods

console.log(Number.isNaN(NaN))
//Determine whether the passed value is NaN.
console.log(Number.isFinite(12))
//Determine whether the passed value is a finite number.
console.log(Number.isInteger(456))
//Determine whether the passed value is an integer.
console.log(Number.isSafeInteger(78))
//Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).
