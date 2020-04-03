/*
JavaScript Data Types
In JavaScript there are 5 different data types that can contain values:
    string
    number
    boolean
    object
    function

There are 6 types of objects:
    Object
    Date
    Array
    String
    Number
    Boolean

And 2 data types that cannot contain values:
    null
    undefined
*/

//typeof not give the data type for Array and Date
//constructor property gives the data type for Array and Date

var arr = ["apple", "banana", "papaya"]; 
console.log(arr + " ==> " + arr.constructor); // Returns function Array()   {[native code]}

var date = new Date(); 
console.log(date + " ==> " + date.constructor); // Returns function Date()    {[native code]}

function add(){
    console.log('add');
}
console.log('add()' + " ==> " +add.constructor);

var driver = {
    name:'John', 
    age:34
};
console.log(driver); // here returns the value of object
console.log(driver + " ==> " + driver.constructor); // here returns the data type of variables

console.log("John" + " ==> " + "John".constructor); // Returns function String()  {[native code]}

console.log((3.14) + " ==> " + (3.14).constructor); // Returns function Number()  {[native code]}

console.log(false + " ==> " + false.constructor); // Returns function Boolean() {[native code]}


var a = new String("abc");
var b = new String("def");
console.log(a.constructor === b.constructor); // true, these two instances of String have the same class:
    
/*
JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

By the use of a JavaScript function
Automatically by JavaScript itself
*/

// Converting Numbers to Strings
var f = 123;
console.log(f + " ==> " +typeof f);
console.log(String(f) + " ==> " +typeof String(f));
console.log(String(f).toString());


console.log(String(Date()));
console.log(Number("99 88")); // NaN
console.log(Number("99.88"));

console.log(Number.parseInt("897.22"));



/*The Unary + Operator
The unary + operator can be used to convert a variable to a number:*/
/*
    +3                                   // returns 3
    +'-3'                                // returns -3
    +'3.14'                              // returns 3.14
    +'3'                                 // returns 3
    +'0xFF'                              // returns 255
    +true                                // returns 1
    +'123e-5'                            // returns 0.00123
    +false                               // returns 0
    +null                                // returns 0
    +'Infinity'                          // returns Infinity
    +'infinity'                          // returns NaN
    +function(val){  return val }        // returns NaN
*/
var g = "10";
console.log(g +" ==> "+ typeof g)
var h = + g;
console.log(h +" ==> "+ typeof h)

console.log(+'0xFF');


//Automatic Type Conversion
/*
    5 + null    // returns 5         because null is converted to 0
    "5" + null  // returns "5null"   because null is converted to "null"
    "5" + 2     // returns "52"      because 2 is converted to "2"
    "5" - 2     // returns 3         because "5" is converted to 5
    "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
    7 + "2"     // return 72          because 7 and "2" are converted to "72"
*/

//Any operands doing operations with String by using plus '+', this operator acts as concatenate
var m = "5" + 2 + 3;
console.log(m +" ==> "+ typeof m) // "523" here + acts as concatenate so finally it returns string

var n = 2 + 3 + "5";
console.log(n +" ==> "+ typeof n) // "55" here first + acts mathmetical and second + acts as concatenate so finally it returns string "55"

var o = 7 + "2";
console.log(o +" ==> "+ typeof o); // "72" here first + acts mathmetical and second + acts as concatenate


//Any operands doing operations with String by using plus '-', '*', ''/', then these operators acts as mathemetical operators
var p = "5" - 2;
console.log(p +" ==> "+ typeof p); // 3

var q = "5" * 2;
console.log(q +" ==> "+ typeof q); // 10

var r = "15" / 3;
console.log(r +" ==> "+ typeof r); // 5

console.log(Number(null));
console.log(String(null));


/*
Automatic String Conversion
JavaScript automatically calls the variable's toString() function when you try to "output" an object or a variable:
*/
var myVar;

myVar = {name:"Fjohn", age:25}; // toString converts to "[object Object]"
console.log(myVar);

myVar = [1,2,3,4]; // toString converts to "1,2,3,4"
console.log(myVar);

myVar = new Date(); // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
console.log(myVar);  




