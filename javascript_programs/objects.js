(function(){
    function display(content){
        document.write("<h3>"+content+"</h3>");
    }

display("JavaScript Object")

let person = {
    firstName: "Raju",
    lastName: "Gade",
    age : 15,
    isAdult(){ return person.age>=18; }
}
display(person.firstName)
display(person.isAdult())

display("Creating object Using Literals")

function registerUser(firstName, lastName){
    let person = {
        firstName,
        lastName,
        age : 15,
        isAdult() { return person.age>=18;}
    }
    display(Object.keys(person))
}
registerUser('John', 'Doe')
    display("For Loop abd Object.keys works as same")
    for(let propName in person){
        display(propName)
    }

    let person1 = {
        firstName: 'John',
        lastName: 'Doe'
    }
    let person2 = {
        firstName: 'John',
        lastName: 'Doe'
    }

    display(person1 == person2)
    display(person1 === person2)
    display(Object.is(person1, person2))

    let person3 = person1;

    display(person1 == person3)
    display(person1 === person3)
    display(Object.is(person1, person3))




let person4 = {};
Object.assign(person4, person1)

display(person1 == person4)
display(person1 === person4)
display(Object.is(person1, person4))

let healtstats = {
    height: 68,
    weight: 55
}

Object.assign(person, healtstats);

display(Object.keys(person))

display("<h2>=============Constructor Functions===============</h2>")

function Person(fname, lName, age){
    this.firstName = fname,
    this.lastName = lName,
    this.age = age,
    this.isAdult = function(){this.age>=21;}
}

let sofia = new Person("Sofia", "Cooper", "22");
let jim = new Person("Jim", "Cooper", "28");

display(Object.values(sofia));
display(Object.values(jim));

function displayObject(person){
    for(let propName in person){
        display(propName+ " : " + person[propName])
    }
}
displayObject(sofia)

displayObject(Object.getOwnPropertyDescriptor(sofia, "firstName"))

Object.defineProperty(sofia, 'firstName', {writable: false})

displayObject(Object.getOwnPropertyDescriptor(sofia, "firstName"))

Object.defineProperty(jim, 'fullName', 
{
    get : function(){
        return this.firstName + this.lastName;
    },

    set : function(value){
        var nameParts = value.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
});
display(jim.fullName)

jim.fullName = "Jim Doe";
display(jim.fullName);

})();