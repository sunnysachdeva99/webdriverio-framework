
// JavaScript Functions (names) must begin with:

/* A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_) */

var funs;
var num3;
var computer;

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

var added = (function(){
  let counter = 0;
  counter += counter + 1;
  return counter;
})();

console.log("Counter: ", added);
console.log("Counter: ", added);

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



 /*
 'this' and Arrow Functions:-
 Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
 Another significant advantage it offers is the fact that it does not bind its own this. 
 In other words, the context inside arrow functions is lexically or statically defined.
*/

// Regular function (without arrow function)
 let People = function(person, age){
   this.person = person;
   this.age = age;

   this.info = function(){
    // here this = People obj
    console.log(this);

    setTimeout(function() { 
      // here this is NOT People."this" 
      console.log("Regual Fucntion ==> " + this.person + " is " + this.age + " years old"); 
    }, 3000);
   }
 }

 let person1 = new People('John', 21);  
 person1.info();  // undefined is undefined years old after 3 seconds



 // The above problem solved by Arrow Function

 //arrow function
 let ArrowPeople = function(person, age){
  this.person = person;
  this.age = age;

  this.info = function(){
   // here this = ArrowPeople obj
   console.log(this);

   setTimeout( () => { 
     // arrow function to make lexical "this" binding SO here this=People."this" has been inherited  
     console.log("Arrow Fucntion ==> " + this.person + " is " + this.age + " years old"); 
   }, 3000);
  }
}

let person2 = new ArrowPeople('John', 21);  
person2.info();  // John is 21 years old

// 'this' keyword in separated methods:

// separating the method info() from its object by storing it in a variable 
let separated = person2.info; 
separated(); // undefined is undefined years old 

// To solve above problem by binding same this object
let separated1 = person2.info.bind(person2); 
separated1(); // John is 21 years old



//The Funcrion Parameters
/*
Parameter Rules:
  JavaScript function definitions do not specify data types for parameters.
  JavaScript functions do not perform type checking on the passed arguments.
  JavaScript functions do not check the number of arguments received.
*/

// allows default parameter values in the function declaration
function fOne(a=5, b=5) {
  console.log(a,b);  
}

fOne();     //default initialized value 5,5
fOne(7,7);  //passed argument values 7,7



//The Arguments Object

/*
  JavaScript functions have a built-in object called the arguments object.
  The argument object contains an array of the arguments used when the function was called (invoked).
  This way you can simply use a function to find (for instance) the highest value in a list of numbers:
  If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
*/

function findMaxValue(){
  var maxV = -Infinity;
  for(var i = 0; i < arguments.length; i++){
    if(arguments[i] > maxV){
      maxV = arguments[i];
      //console.log(maxV);
    }
  }
  console.log(maxV);
}

findMaxValue(1, 25, 38, 2, 18);  // 38



// Arguments are Passed by Value
// Changes to arguments are not visible (reflected) outside the function.

function square(x){
  return x = x * x;
  
}
num3 = 10;
console.log("Argument Value After Square Off: ", square(num3)) // 100, as here the value of y is assgined to x
console.log("Parameter's Original Value: ", num3); // 10, as no change the value of y



// Objects are Passed by Reference
// Changes to object properties are visible (reflected) outside the function.

function turnOn(machine){
  return machine.isOn = true;
}

computer = {
  isOn: false
};

console.log(computer.isOn);     // false
console.log(turnOn(computer));  // true
console.log(computer.isOn);     // true



// when you pass a reference to a function, the function cannot change the reference to point to another object.
function turnOff(machine) {
  return machine = {
      isOff: true
  };
}

computer = {
  isOff: false
};

console.log(computer.isOff);     // false
console.log(turnOff(computer));  // true
console.log(computer.isOff);     // false



// Function Invokation
function myF(a, b) {
  return a * b;
}
console.log(myF(10, 2));  // Default Global Object
console.log(window.myF(5, 6));  // function above automatically becomes a window function without a object


function myFn() {
  return this;
}
var funs = myFn();            
console.log(funs); // funs will be the window object


//Invoking a Function as a Method, myObj object, fullName() method
var myObj = {
  firstName: "John",
  lastName: "Smith",
  fullName: function(){
    return this.firstName + " " + this.lastName;
    //return this; // returns the [Object Object]
  }
}

console.log(myObj.fullName());


// Invoking a Function with a Function Constructor
// If a function invocation is preceded with the new keyword, it is a constructor invocation.
function fin(a, b){
  this.firstName = a,
  this.lastName = b
}
fun = new fin("Sumanta", "Kumar");
console.log(fun.firstName);





/*
The JavaScript call() Method
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.

The Function the type has a method named call() with the following syntax:
functionName.call(thisArg, arg1, arg2, ...);
The call() method calls a function with a given this value and arguments.
The first argument of the call() method thisArg is the this value. It allows you to set the this value to any object.
The remaining arguments of the call() method arg1, arg2,… are the arguments of the function.

*/


var per = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
  },
  nameAddress: function(city, state){
    return this.firstName + " " + this.lastName + " " + city + " " + state;
  }
}


var p0 = {
  firstName: "Richard",
  lastName: "Mohn"
}

var p1 = {
  firstName: "Mani",
  lastName: "Chand"
}

console.log(per.fullName.call(p0)); 

// The call() Method with Arguments
console.log(per.nameAddress.call(p1, "Chicago", "USA"));


function show() {
  console.log('Show function');
  
}

// The way calling the methods below are same behave
show(); //Global Object
show.call(); // call() metod


// By default, the thisvalue inside the function is set to the global object i.e., window on web browsers and global on node.js:
// Note that in the strict mode, the this  inside the function is set to 'undefined' instead of the global object.
function showThis() {
  console.log(this);
}

showThis(); //Global Object
showThis.call(); // call() metod


function hide(a, b) {
  console.log('Hide function', a, b);
}

hide.call(5,3); // 3, undefined
hide.call(this, 5,3); // 5,3



var greeting = 'Hi';

var messenger = {
    greeting: 'Hello'
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(this, "Sumanta"); // Hi Sumanta - refers to global object  (var greeting = 'Hi'). Refers the greeting via the this value.
say.call(messenger, "Sumanta"); // Hello Sumanta - refers to the object passed as argument. Pass the messenger object as the this value:



// Using the JavaScript call() method to chain constructors for an object

function Box(height, width){
  this.height = height;
  this.width = width;
}

function Widget(height, width, color){
  Box.call(this, height, width);
  this.color = color;
}

var result = new Widget(100, 200, 'red');
console.log(result);


// Using the JavaScript call() method to borrow methods of another object

var car = {
  name: 'car',
  start: function(){
    console.log('start the ' + this.name);
  },

  speedup: function(){
    console.log('speed up the ' + this.name);
  },

  stop: function(){
    console.log('stop the ' + this.name);
  }

}

var aircraft = {
  name: 'aircraft',
  fly: function(){
    console.log('fly the ' + this.name);
  }
}

car.start.call(aircraft); // start the aircraft
car.speedup.call(aircraft); // speedup the aircraft
car.stop.call(aircraft); // stop the aircraft

var name = 'aeroplance';
aircraft.fly.call(this); // fly the aeroplance
aircraft.fly.call(car); // fly the car



/*
JavaScript Function Apply

With the apply() method, you can write a method that can be used on different objects.
The JavaScript apply() Method
The apply() method is similar to the call() method (previous chapter).

The difference between call() and apply()
=> call() accepts the arguments separately.
=> apply() accepts the arguments in a array.

Syn: apply(thisArg, [array])
*/


console.log(per.fullName.apply(p0));

// The apply() Method with Arguments
console.log(per.nameAddress.apply(p1, ["Chicago", "USA"]));


function doSum(a, b){
  return a + b;
}

const res = doSum.apply(null, [9, 2]);
console.log(res);


// You can add n number of arguments, it will do result
function doSums(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}

const dos = doSums.apply(null, [9, 2, 1, 16]);
console.log(dos);




