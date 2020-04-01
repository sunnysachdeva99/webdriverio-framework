console.log("Reference Type Variables Begins");
/* Reference Types Variablses
    Object
    Array
    Function
*/


// Object Reference Type
let employee = {
    name: 'Sumanta',
    id: 861
};

console.log(employee);

// Dot Notation
employee.name = 'SKumar';
console.log(employee.name);

// Bracket Notation
employee['name'] = 'SKBehera';
console.log(employee['name']);


// Array Reference Type
let colors = ['blue', 'red'];
colors[2] = 'green';
colors[4] = 'pink';
colors[5] = 10;
console.log(colors);
console.log(colors.length);
console.log(colors[0]);

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
console.log("Reference Type Variables Ends");