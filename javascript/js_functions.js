
// JavaScript Functions (names) must begin with:

/* A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_) */

var funs;

function findProduct(p1, p2) {
    return p1 + p2;   
  }
console.log(findProduct(5,2));


function $(p1, p2) {
    return p1 / p2;   
  }
console.log($(15,3));


function $$(p1, p2) {
    return p1 - p2;   
}
console.log($$(10,8));


function _module(p1, p2) {
    return p1 % p2;   
}
console.log(_module(10,8));


function doBODMAS(p1, p2) {
    var x = (p1 + p2) * (p1 - p2) / (p1 * p2) + (p1 / p2)
    console.log('1st arg: ' + p1, ', 2nd arg: ' + p2);
    console.log('Sum : ' + (p1 + p2)); // Sum : 22
    console.log('Diff : ' + (p1 - p2)); // Diff : 18
    console.log('Product : ' + (p1 * p2)); // Product : 40
    console.log('Quotient : ' + (p1 / p2)); // Quotient : 10
    return x;   // output: 19.9 (The function returns the result of BODMAS Formula calculation)
}
console.log(doBODMAS(20,2));


// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
var getCelius = toCelsius(77);
console.log(getCelius); // 25 Celsius

// The () Operator Invokes the Function, 'toCelsius' refers to the function object, and 'toCelsius()' refers to the function result.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius); // without (), it retunrs function definition instead of function result


  var f = function (a, b) { // anonymous function, it must be stored with a variable. It must be terminated by semicolon
        var m = a + b // semicolon not mandatory with statements inside block
        return m
  };

  //var x = function (a, b) {return a * b};
  console.log(f(20, 12));


  // Function Object
  var funny = new Function("a", "b", "return a * b");
  console.log(funny(20, 12));
  
// Functions Hoisted
console.log(myFunction(5));
function myFunction(y) {
  return y * y;
}

// Variable Hoisted
console.log(a); // undefined
var a; 


console.log("Und: " + myFunctions(5));
function myFunctions(y) {
  return y * y;
}

// Anonymous Self-invoking Function
(function (y) {
    
    console.log(" Hello! I called myself " + y * y);
    
  })(5);

  (function(){
    console.log(" Hello! I self invoked function myself ");
  })();

(function(){
    console.log(" Hello! I self invoked function myself again ");
})();


// Functions are Objects
function argCount(a, b){
    return arguments.length;
}

console.log(argCount(1,2));
console.log(argCount.toString()); // The toString() method returns the function as a string
console.log(argCount(1,2).toString()); // The toString() method returns the function as a string


/*
Arrow Functions is for only Anonymous Function
Arrow functions allows a short syntax for writing function expressions.
You don't need the function keyword, the return keyword, and the curly brackets.
*/

//ES5
function multiply(a, b){
    return a * b;
}
console.log(multiply(12,5));

//Arrow Funtion
//ES6
const mul = (a, b) => a * b;
console.log(mul(13,5));

const div = () => 15 / 5; // if NO param, then parentheses required
console.log(div());

const nums = n => "This is my no: " + n ; //if only one param then no parentheses, no bracket {} and no return required
 console.log(nums(10));

 const add = (a, b) => { //if there are more than one statement in the block then block bracket {} and return required
     var z = a + b;
     return z;
 }
 console.log(add(1, 3));


//Multiple Arrow Funtion




