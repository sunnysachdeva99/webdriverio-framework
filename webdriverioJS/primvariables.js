
console.log("Primitive Type / Value Type Variables Begins");
/* Primtive / Value Types Variablses
    String
    Number
    Boolean
    undefined
    null
*/


let name = 'Sumanta'; // String Literals
let id = 861; // Number literals
let isEmployee = true; // Boolean literals
let base; // Or let base = undefined; // undefined type and value both
let project = null; // Object type variable which can be reassigned with appropriate value later during programming

console.log(name + " " + id + " " + isEmployee + " " + base);

/* Reference Types Variablses
    Object
    Array
    Function
*/


// Object Reference Type
let person = {
    name: 'Sumanta',
    id: 861
};

console.log(person);

// Dot Notation
person.name = 'SKumar';
console.log(person.name);

// Bracket Notation
person['name'] = 'SKBehera';
console.log(person['name']);


// Array Reference Type
let selectedColor = ['blue', 'red'];
selectedColor[2] = 'green';
selectedColor[4] = 'pink';
selectedColor[5] = 10;
console.log(selectedColor);
console.log(selectedColor.length);
console.log(selectedColor[0]);

// Function Reference Type


// Perfoming a task
function greets(name){
    console.log('Welcome To JS Mr. ' + name);
}

greets('Sumanta');


function greet(name, lastName){
    console.log('Welcome To JS ' + name + ' ' + lastName);
}

greet('Sumanta', 'Kumar');
greet('Prabhanjan'); // If we don't pass the 2nd Param then it will identify the argument as undefined



// Calculating a value
function square(number){
    return number * number;
}

//let findSquare = square(2);
//console.log(findSquare);

//OR

console.log(square(5));

console.log("Primitive Type / Value Type Variables Ends");