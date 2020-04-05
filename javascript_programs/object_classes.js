(function(){
    function display(content){
        document.write("<h3>"+content+"</h3>");
    }
    function displayObject(person){
        for(let propname in person){
            display(propname+" : "+ person[propname])
        };
    }

display("JavaScript Classes")

class Person{
    constructor(firstName, lastName, age){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
    }
    static adultAge = 18;
}

let jim = new Person('Jim', 'Cooper', 29);

displayObject(jim)

class Student extends Person {
    constructor(firstName, lastName, age){
        super(firstName, lastName, age);
        this.enrolledCourses = [];
    }
    static fromPerson(person){
        return new Student(person.firstName, person.lastName, person.lastName);
    }
}

let sofia = new Student('Sofia', 'Cooper', 29);

displayObject(sofia)

displayObject(Student.fromPerson(jim))

display(Person.adultAge);

})();