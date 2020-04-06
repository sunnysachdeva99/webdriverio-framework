/*
JavaScript Objects
    A javaScript object is an entity having state and behavior (properties and method). 
    For example: car, pen, bike, chair, glass, keyboard, monitor etc.
    JavaScript is an object-based language. Everything is an object in JavaScript.
    JavaScript is template based not class based. Here, we don't create class to get the object. But, we direct create objects.

There are 3 ways to create objects.
    By object literal
    By creating instance of Object directly (using new keyword)
    By using an object constructor (using new keyword)
*/

// Exa1 - JavaScript Object by object literal
emp = {
    id: 102,
    name: "Shyam Kumar",
    salary: 40000
}
console.log(emp.id, emp.name, emp.salary);


// Exa2 - By creating instance of Object
var emp1 = new Object();
emp1.id = 101;
emp1.name = "Ravi Malik";
emp1.salary = 50000;
console.log(emp1.id, emp1.name, emp1.salary);


// Exa2 - By using an Object constructor
function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
emp2 = new employee(103, "Vimal Jaiswal", 30000);
console.log(emp2.id, emp2.name, emp2.salary);


// Exa3 - Defining method in JavaScript Object
function employee1(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;
    function changeSalary(otherSalary) {
        this.salary = otherSalary;
    }
}
emp3 = new employee1(103, "Sonoo Jaiswal", 30000);
console.log(emp3.id + " " + emp3.name + " " + emp3.salary);
emp3.changeSalary(45000);
console.log(emp3.id + " " + emp3.name + " " + emp3.salary);


// Delete a property of an object
// To delete a property from an object, you use the delete operator:
// syn: delete objectName.propertyName;
//delete emp3.salary;
//console.log(emp3);


// Check if a property exists, propertyName in objectName
//console.log('salary' in employee1);



// Changing a Property Value
// Syntax - Object.defineProperty(object, property, {value : value})

//Object.defineProperty(emp3, "salary", {value:"2000"})
//console.log(emp3.id + " " + emp3.name + " " + emp3.salary);

var emp4 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(emp4.id + " " + emp4.firstName + " " + emp4.firstName );
  console.log(emp4.fullName());


// Property Descriptor
  var person = {
    firstName:'Steve',
    lastName:'Jobs'
  };
  
  function Student(){
    this.name = "John";
    this.gender = "Male";
    this.sayHi = function(){
      console.log('Hi');
    }
  }
  
  var student1 = new Student();
  
  console.log(Object.getOwnPropertyDescriptor(person,'firstName'));
  console.log(Object.getOwnPropertyDescriptor(student1,'name'));
  console.log(Object.getOwnPropertyDescriptor(student1,'sayHi'));



  // Define New Property
  function Students(){
    this.title = "Mr.";
    this.name = "Steve";
  }
  
  var student1 = new Students();
  
  Object.defineProperty(student1,'fullName',{
    get:function(){
      return this.title + ' ' + this.name;
    },
    set:function(_fullName){
      this.title = _fullName.split(' ')[0];
      this.name = _fullName.split(' ')[1];
    }
  });
  
  student1.fullName = "Mr. John";
  
  console.log(student1.title);
  console.log(student1.name);








