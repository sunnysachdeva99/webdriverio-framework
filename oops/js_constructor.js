/*
JavaScript Constructor Method
    A JavaScript constructor method is a special type of method which is used to initialize and create an object. 
    It is called when memory is allocated for an object.

Points to remember
    The constructor keyword is used to declare a constructor method.
    The class can contain one constructor method only.
    If we didn't specify any constructor method, JavaScript use default constructor method.
    JavaScript allows us to use parent class constructor through super keyword.
*/


class Citizen {                     // If no construcot defined then JS uses default constructor method.
    name = 'Manisha Singh';
    age = 68;
}

var citizen = new Citizen();
console.log(citizen.name + ", " + citizen.age);


class Person {
    constructor() {
        this.id = 100;
        this.name = "Rakesh Singh";
    }

    // constructor() {  // throw error  that Clas has only one constructor method
    //     this.id = 101;
    //     this.name = "Bikram Singh";
    // }
}  

var person = new Person();
console.log(person.id + ", " + person.name);


class CompanyName{
  constructor(){
    this.company="Javatpoint";
  }
}

class Employee extends CompanyName{
    constructor() {
        super();
        this.id = 101;
        this.name = "Martin Roy";
    }
}  

var employee = new Employee();
console.log(employee.id + ", " + employee.name+ ", " + employee.company);


class SchoolName{
  constructor(schoolName){
    this.schoolName = schoolName;
  }
}

class Student extends SchoolName{
    constructor(schoolName, rollNo, name) {
        super(schoolName); // calling parent class constructor
        this.id = rollNo;
        this.name = name;
    }

}  

var student = new Student('MPHSchool', 'Sumanta', 105);
console.log(student.id + ", " + student.name + ", " + student.schoolName);