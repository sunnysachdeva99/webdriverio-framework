/*
JavaScript Inheritance
    The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. 
    It provides flexibility to the child class to reuse the methods and variables of a parent class.
    The JavaScript extends keyword is used to create a child class on the basis of a parent class. 
    It facilitates child class to acquire all the properties and behavior of its parent class.

Points to remember
    It maintains an IS-A relationship.
    The extends keyword is used in class expressions or class declarations.
    Using extends keyword, we can acquire all the properties and behavior of the inbuilt object as well as custom classes.
    We can also use a prototype-based approach to achieve inheritance.
    Static method can be overridden by Child class
*/


// Example 1

class CompanyName {
    enrollno = 'parent';
    constructor() {
        this.company = "Javatpoint";
    }

    show() {
        console.log('Show method from ==>  It is from parent class');
    }

    details() {
        console.log('Details method from ==> It is from parent class');
    }

}

// Example 2 - IS-A Relationship (Inheritence) - non-static methods
class Employee extends CompanyName {
    enrollno = 'child';
    constructor() {
        super();
        this.id = 101;
        this.name = "Martin Roy";
    }

    show() {
        //super.show();
        console.log('Show method from ==>  It is from child class');
    }
}

var employee = new Employee();
console.log(employee.enrollno); // calling from child object
employee.show(); // calling from child object
employee.details(); // calling from child object

console.log(employee.id + ", " + employee.name + ", " + employee.company);



// Example 3 - inherits and override the static methods by child class

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    static walk() {
        console.log('parent ==>  walking on  legs');
    }
    static helloWorld() {
        console.log('parent ==>  Bird Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }

    static helloWorld() {
        //super.helloWorld(); // calling this method from parent class by super() method
        console.log('Child ==>  Bird Hello World');
    }

    static superMethodCall() {
        super.helloWorld(); // calling this method from parent class by super() method

    }
}

// calling the overridden method  
var bird = new Bird();
//bird.superMethodCall();
Bird.walk(); // inherits from parent class
Bird.superMethodCall(); // called from child class
Bird.helloWorld(); // called from child class


/*
JavaScript extends Example: a Prototype-based approach
    Here, we perform prototype-based inheritance. In this approach, there is no need to use class and extends keywords
*/

function Person(firstName, lastName) {
    this.FirstName = firstName;
    this.LastName = lastName;
};

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName;
    this.Grade = grade || 0;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
var std = new Student("James","Bond", "XYZ", 10);
console.log(std.getFullName());
