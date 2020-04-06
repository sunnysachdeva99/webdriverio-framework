/*
Class expressions
    Another way to define a class is by using a class expression. 
    Here, it is NOT mandatory to assign the NAME of the class. So, the class expression can be named or unnamed. 
    The class expression allows us to fetch the class name. However, this will not be possible with class declaration.
    We can create Singleton class by using Class expressions.
*/


var emp = class {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        console.log("Id & Name: " + this.id + " " + this.name);
    }
}

var emp1 = new emp(1, "Sumanta");
emp1.detail();


// We can re-declare the same class through 'Class expressions'
var emp = class {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        console.log("Id & Name: " + this.id + " " + this.name);
    }
}

var emp2 = new emp(2, "Riann");
emp2.detail();


// we can also assign the NAME of the class
var empl = class Employee{

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    detail() {
        console.log("Id & Name: " + this.id + " " + this.name);
    }
}

var emp3 = new empl(3, "Aryan");
emp3.detail();




// Singleton class by using Class expressions
let boy = new class {
    constructor(name){
        this.name = name;
    }

    start(){
        console.log(`Starting the  ${this.name} ...`);
    }

}('Awsome boy');
boy.start();


// Staric member
let fruit = class {
    constructor(name){
        this.name = name;
    }

    start(){
        console.log(`Starting the  ${this.name} ...`);
    }

    static create(name){
        return new fruit(name);
    }
};
var fruitname = fruit.create('apple');
fruitname.start();
