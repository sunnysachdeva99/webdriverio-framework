
// JavaScript Functions (names) must begin with:

/* A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_) */

function findProduct(p1, p2) {
    return p1 + p2;   
  }
console.log(findProduct(5,2));


function $(p1, p2) {
    return p1 / p2;   
  }
console.log($(15,3));


function $$(p1, p2) {
    return p1 - p2;   
}
console.log($$(10,8));


function _module(p1, p2) {
    return p1 % p2;   
}
console.log(_module(10,8));


function doBODMAS(p1, p2) {
    var x = (p1 + p2) * (p1 - p2) / (p1 * p2) + (p1 / p2)
    console.log('1st arg: ' + p1, ', 2nd arg: ' + p2);
    console.log('Sum : ' + (p1 + p2)); // Sum : 22
    console.log('Diff : ' + (p1 - p2)); // Diff : 18
    console.log('Product : ' + (p1 * p2)); // Product : 40
    console.log('Quotient : ' + (p1 / p2)); // Quotient : 10
    return x;   // output: 19.9 (The function returns the result of BODMAS Formula calculation)
}
console.log(doBODMAS(20,2));


// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
var getCelius = toCelsius(77);
console.log(getCelius); // 25 Celsius


// The () Operator Invokes the Function, 'toCelsius' refers to the function object, and 'toCelsius()' refers to the function result.
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius); // without (), it retunrs function definition instead of function result

  