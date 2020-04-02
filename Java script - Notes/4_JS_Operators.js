/*
Operators:
    JavaScript has the following types of operators. 
        Assignment operators
        Comparison operators
        Arithmetic operators
        Bitwise operators
        Logical operators
        String operators
        Conditional (ternary) operator
        Comma operator
        Unary operators
        Relational operators       
*/
//Assignment operators:
x=10
y=5

//Assignment-- x = y
x=y
console.log(x)

// Addition assignment-- x += y	x = x + y
console.log(x += y)

// Subtraction assignment--	x -= y	x = x - y
console.log(x -= y)

// Multiplication assignment	x *= y	x = x * y
console.log(x *= y)

// Division assignment	x /= y	x = x / y
console.log(x /= y)

// Remainder assignment	x %= y	x = x % y
console.log(x %= y)

x=10

// Exponentiation assignment	x **= y	x = x ** y
console.log(x **= y)

// Left shift assignment	x <<= y	x = x << y
console.log(x)

// Right shift assignment	x >>= y	x = x >> y
console.log(x <<= y)

// Unsigned right shift assignment	x >>>= y	x = x >>> y
console.log(x >>>= y)

// Bitwise AND assignment	x &= y	x = x & y
console.log(x &= y)

// Bitwise XOR assignment	x ^= y	x = x ^ y
console.log(x ^= y)

// Bitwise OR assignment	x |= y	x = x | y
console.log(x |= y)

/*
Destructuring:
     Destructuring assignment syntax is a JavaScript expression that makes it possible 
     to extract data from arrays or objects using a syntax that mirrors the construction 
     of array and object literals.
*/
//example-- destructuring
var foo = ['one', 'two', 'three'];

// without destructuring
var one   = foo[0];
var two   = foo[1];
var three = foo[2];
console.log(one,two,three)

// with destructuring
var [one1, two1, three1] = foo;
console.log(one1, two1, three1)

//delete : The delete operator deletes an object, an object's property, 
 // or an element at a specified index in an array.

//example -- delete
abc = 10
console.log(abc)
delete abc
//console.log(abc) //throws error

/*
Spread operator(...):
    The spread operator allows an expression to be expanded in places where multiple 
    arguments (for function calls) or multiple elements (for array literals) are expected.
*/
//example -- spread
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics)