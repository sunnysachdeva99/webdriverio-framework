console.log("Global, Function & Block Scope Begins");
// let basically for Block Scope
function letBlockScope(){

    console.log('======let begins here====');

    for(let i = 0; i < 10; i++ ){
        console.log(i);
    }
    // Outside of block scope
    //console.log(i); // It will throw ReferenceError
}

letBlockScope();
console.log('======let ends here====');
console.log('======var begins here====');

// var basically for Function Scope
function varFunctionScope(){
    for(var i = 0; i < 10; i++ ){
        console.log(i);
    }
    // Outside of block scope
    console.log(i);
}

varFunctionScope();
console.log('======var ends here====');



//Problem with var type in Global Scope
var color = 'red';
let age = 6;

console.log(window.color);
console.log(window.age);
console.log(window.varFunctionScope());

console.log("Global, Function & Block Scope Ends");