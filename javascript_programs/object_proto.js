(function(){
    function display(content){
        document.write("<h3>"+content+"</h3>");
    }
    function displayObject(person){
        for(let propname in person){
            display(propname+" : "+ person[propname])
        };
    }

display("JavaScript Prototpes")
    
function Person(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
}

display(JSON.stringify(Person.prototype));
Person.prototype.age = 29;
display(JSON.stringify(Person.prototype));

let jim = new Person("Jim", "Cooper");
let sofia = new Person("Sofia", "Cooper");
displayObject(jim);
displayObject(sofia);

jim.age = 18;
display(jim.age);
displayObject(jim.__proto__);

display(jim.hasOwnProperty('age'))

display("Multiple Inheritance")
display(JSON.stringify(jim.__proto__));
display(JSON.stringify(jim.__proto__.__proto__));
display(JSON.stringify(jim.__proto__.__proto__.__proto__));

})();