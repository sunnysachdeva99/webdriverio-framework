/* 

There are 3 variables as part of Scoping.
They are :

    1.var
    2.let
    3.const

var :
    The var statement declares a variable, optionally initializing it to a value.

let:
    The let statement declares a block scope local variable, optionally initializing it to a value.

const:
    Constants are block-scoped, much like variables defined using the let statement. The value of a constant can't be
     changed through reassignment, and it can't be redeclared.

*/

//example for var
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 2

/*

Syntax:
     var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];

    valueN [Optional]
        Initial value of the variable. It can be any legal expression. Default value is undefined.

*/

/*
var hoisting:
    Because variable declarations (and declarations in general) are processed before any code is 
    executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. 
    This also means that a variable can appear to be used before it's declared. This behavior is 
    called "hoisting", as it appears that the variable declaration is moved to the top of the 
    function or global code.

*/
//example of var hoisting
bla = 3;
var bla;
console.log(bla)
//output: 3
/*
Implicit globals and outer function scope:
    Variables that appear to be implicit globals may be references to variables in an outer function scope.
*/
//example
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
           // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // "undefined", as y is local to function a

//let-- example
let x1 = 1;
if (x1 === 1) {
  let x1 = 2;
  console.log(x1);
  // expected output: 2
}
console.log(x1);
// expected output: 1
/*
let allows you to declare variables that are limited to a scope of a block statement,
or expression on which it is used, unlike the var keyword, which defines a variable 
globally, or locally to an entire function regardless of block scope. 
*/
//const--example
const number = 42;
try {
  number = 99;
} catch(err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // Note - error messages will vary depending on browser
}
console.log(number);
// expected output: 42 
/*
This declaration creates a constant whose scope can be either global or local to the block 
in which it is declared. Global constants do not become properties of the window object, 
unlike var variables.

An initializer for a constant is required. You must specify its value in the same statement 
in which it's declared. (This makes sense, given that it can't be changed later.)

The const declaration creates a read-only reference to a value. It does not mean the value 
it holds is immutable—just that the variable identifier cannot be reassigned.

*/