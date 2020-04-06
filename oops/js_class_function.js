/*
Class in JavaScript
    JavaScript ECMAScript 5, does not have class type. So it does not support full object oriented programming concept 
    as other languages like Java or C#. However, you can create a function in such a way so that it will act as a class.
    The following example demonstrates how a function can be used like a class in JavaScript.
*/


//function can be used like a CLASS in JavaScript

// Default constructor 
function Person(){
    this.fname = '';
    this.lname = '';
}

var person = new Person();
person.fname = 'John';
person.lname = 'Mach';

console.log(person);
console.log(person.fname);
console.log(person.lname);

// arg constructor
function Student(name, rollno){
    this.name = name;
    this.rollno = rollno;
    this.details= function(){
        console.log(this.name + ", " + this.rollno);

    }
}

var student = new Student('Jonny Smith', 102);
console.log(student);
console.log(student.name);
console.log(student.rollno);
student.details(); // it's a method


// Getter & Setter methods
function Vehicles(){
    this.vname = '';

    Object.defineProperties(this, {
        'VechileDetails': {
            get: function(){
                return this.vname;
            },
            set: function(name){
                this.vname = name;
            }
        }
    });
}

var vehicle = new Vehicles();
vehicle.VechileDetails = 'Tata';
console.log(vehicle.VechileDetails);



// Do not specify set function in order to create read-only property as shown below.
// Read-only Property

function Tata(name){
    this.name = name
    Object.defineProperties(this, {
        'VechileDetails': {
            get: function(){
                return this.name;
            }
        }
    });
}

var tata = new Tata('Nexon');
console.log(tata.VechileDetails);
