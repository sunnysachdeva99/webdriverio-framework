/*
Object-oriented programming:

Constructors and object instances:

JavaScript uses special functions called constructor functions to define and initialize objects
 and their features. They are useful because you'll often come across situations in which you 
 don't know how many objects you will be creating; constructors provide the means to create 
 as many objects as you need in an effective way, attaching data and functions to them as required.

*/
//function
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
  }
  //You can now create a new person by calling this function 
const dilip = createNewPerson('dilip');
dilip.name;
dilip.greeting();

//Using the create() method
const krishna = Object.create(dilip);
krishna.name;
krishna.greeting();

/*
A prototype-based language?:

JavaScript is often described as a prototype-based language — to provide inheritance, 
objects can have a prototype object, which acts as a template object that it inherits 
methods and properties from.

*/
//constructor function
function Person(first, last, age, gender, interests) {
  
    // property and method definitions
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
 
  }

//Object instance
let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

console.log(person1.valueOf())
//Object.valueOf() is inherited by person1 because its constructor is Person(), and Person()'s 
//prototype is Object()

console.log(Person.prototype) //Returns person object

//creating new instance
let person2 = Object.create(person1);

console.log(person2.__proto__) //This will return the person1 object.

//using constuctor

let person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

console.log(person3.name.first)
console.log(person3.age)

/*

Prototypal inheritance:

the call() function -- This function basically allows you to call a function defined 
somewhere else, but in the current context. The first parameter specifies the value of 
this that you want to use when running the function, and the other parameters are those 
that should be passed to the function when it is invoked.

*/
//inherting teacher from person
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }

console.log(Teacher.__proto__)