/*
Function declarations:
    A function definition (also called a function declaration, or function statement) 
    consists of the function keyword, followed by:
        The name of the function.
        A list of parameters to the function, enclosed in parentheses and separated by commas.
        The JavaScript statements that define the function, enclosed in curly brackets, {...}.        
*/
//example-- function
function square(number) {
    return number * number;
  }
sq = square(10)
console.log(sq)

/*
Function scope:
  Variables defined inside a function cannot be accessed from anywhere outside the function, 
  because the variable is defined only in the scope of the function. However, a function can 
  access all variables and functions defined inside the scope in which it is defined.

  In other words, a function defined in the global scope can access all variables defined in 
  the global scope. A function defined inside another function can also access all variables 
  defined in its parent function, and any other variables to which the parent function has access.
*/
//example -- function scope
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()) // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

console.log(getScore())// Returns "Chamahk scored 5"

/*
Arrow functions:
    An arrow function expression (previously, and now incorrectly known as fat arrow 
    function) has a shorter syntax compared to function expressions and does not 
    have its own this, arguments, super, or new.target. Arrow functions are always 
    anonymous.

    Two factors influenced the introduction of arrow functions: shorter functions and 
    non-binding of this.

*/

//example-- Arrow functions
var a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  var a2 = a.map(function(s) { return s.length; });
  
  console.log(a2); // logs [8, 6, 7, 9]
  
  var a3 = a.map(s => s.length); // arrow function does same as normal function
                                 // '=>' is used as arrow function notation
 
  console.log(a3); // logs [8, 6, 7, 9]