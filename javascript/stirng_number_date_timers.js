// String and it's methods

var str;
var pos;
var num1, num2;
var dt;

str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str.length);
console.log(str.constructor);

str = new String('sdsdd');
console.log(str.length);


str = "Please locate where 'locate' occurs!";
pos = str.search("locate", 15);
console.log(pos);


str = "Please locate where 'locate' occurs!";
pos = str.indexOf("locate", 15);
console.log(pos);


str = "Please locate where 'locate' occurs!";
pos = str.lastIndexOf("locate", 15);
console.log(pos);


str = "Apple, Banana, Kiwi";
pos = str.slice(7, 13); // left to right
console.log(pos);

pos = str.slice(-12, -6); // right to left
console.log(pos);

pos = str.slice(7); // left to right
console.log(pos);

pos = str.slice(-7); // right to right
console.log(pos);

pos = str.substring(7, 13); // left to right
console.log(pos);

pos = str.substr(7, 13); // left to right
console.log(pos);


str = "Please visit Microsoft and Microsoft!"; // '/g' global match
pos = str.replace(/Microsoft/g, "W3Schools");
console.log(pos);

pos = str.replace(/MICROSOFT/i, "W3Schools");
console.log(pos);


str = "       Hello World!        "; // use replace functions to trim the string
//alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// You can also use the replace solution above to add a trim function to the JavaScript String.prototype
/*
if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  var str = "       Hello World!        ";
  alert(str.trim());

 */

 //Property Access
 // ECMAScript 5 (2009) allows property access [ ] on strings
str = "HELLO WORLD";
console.log(str[0]); // H 

str = "a,b,c,d,e,f";
var arr = str.split(",");
console.log(arr.length + " ==> " + " "  + arr[0] + " " + arr[1] + " " + arr[2] + " " +  arr[3] + " " + arr[4] + " " + arr[5]);


str = "Hello";       // String
pos = str.split("");
console.log(pos);           // Split in characters


function employee(name, jobtitle, born) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.born = born;
  }
  employee.prototype.salary = 2000;
  
  var fred = new employee("Fred Flintstone", "Caveman", 1970);
  console.log(fred.salary);


  str = "Hello world!";
  pos = str.repeat(2);
  console.log(pos);




// Number and it's methods

var exp = 123e5; // add 5's ZERO (00000) to 123
var pxe = 123e-5; // divide 123 by 100000 (add 00000 to 1)
console.log(exp + " " + pxe);



// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
str = 0.2 + 0.1; 
console.log(str); // expected 0.3 but actual 0.30000000000000004

// To overcome above issue
str = (0.2 * 10 + 0.1 * 10) / 10; 
console.log(str); // 0.3


num1 = 10;
num2 = 20;
console.log(num1 + num2); // 30
console.log("The result is: " + num1 + num2); // 1020
console.log("The result is: ", num1 + num2); // 30


num1 = 100 / "Apple"; 
console.log(isNaN(num1)); // true

num1 = NaN;
num2 = "20";
console.log(num1 + num2); // NaN20
console.log(num1 - num2); // NaN


// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

// num1 = 2;
// num2 = "";
// while (num1 != Infinity) {   // Execute until Infinity
//     num2 = num2 * num1;
// }
// console.log(num2); // NaN


// num1 =  2 / 0;       // x will be Infinity
// num2 = -2 / 0;
// console.log(num1, num2); // NaN20

// JS interprets numeric constants as hexadecimal if they are preceded by 0x. 
num1 = 0xFF;        // x will be 255
console.log(num1); // NaN

console.log(07.toString()); // 7


num1 = 32;
console.log(num1.toString(10));  // returns 32
console.log(num1.toString(32));  // returns 10
console.log(num1.toString(16));  // returns 20
console.log(num1.toString(8));   // returns 40
console.log(num1.toString(2));   // returns 100000


num1 = isFinite('123'); // it converts the value to Number then test it
console.log(num1); // true
num1 = isFinite(123); 
console.log(num1); // true


console.log(Number.isFinite('123')); // false  as does not convert, it check it's a Number type, and value is infine, then true
console.log(Number.isFinite(123)); // true


console.log(Number.isInteger('123')); // false  as does not convert, it check it's a Number type, and value is infine, then true
console.log(Number.isInteger(123)); // true


num1 = "10";
num2 = +num1 // The unary + operator can be used to convert a variable to a number
console.log(num2 + " ==> "+ typeof num2);

num1 = isNaN(123);
console.log(num1); // false

num1 = isNaN('123');
console.log(num1); // false

num1 = isNaN('Apple');
console.log(num1); // true

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(0/0)); // true
console.log(Number.isNaN('123')); // false
console.log(Number.isNaN('Apple')); // false

num1 = Number.isSafeInteger(Math.pow(2, 53));
console.log('===> ', num1); // false

num1 = Number.isSafeInteger(Math.pow(2, 53)-1);
console.log('===> ', num1); // true

console.log(Number.NaN);
console.log(Number.MAX_VALUE);

num1 = new Number(100924).toLocaleString('en-IN');
console.log(num1); // Indian English

num1 = new Number(100924).toLocaleString('es-US');
console.log(num1); // US English

num1 = 13.3714;
console.log(num1.toPrecision()); // 13.3714
console.log(num1.toPrecision(2)); // 13
console.log(num1.toPrecision(10)); // 13.37140000 // it will add ZERO upto 10 digits completed

// Date and it's methods

dt = new Date();
console.log(dt);
dt.setMonth(2);
console.log(dt);
console.log(dt.getUTCMonth());


dt = new Date(2020, 03, 20, 07, 25, 30, 0);
console.log(dt);

dt = new Date("2020-04-03");
console.log(dt);


dt = Date.parse("April 03, 2020");
console.log(dt);
dt = new Date(dt);
console.log(dt);

console.log(dt.getMonth());

Date.prototype.myDate = function (){ // anonymous function
    if(dt.getMonth() == 2){
        dt.prototype = "March";
    } else if (dt.getMonth() == 3){
        dt.prototype = "April";
    }
};


dt = new Date();
dt.myDate();
console.log(dt.prototype);


dt = new Date();
console.log(dt.toLocaleDateString());
console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleString());
console.log(dt.constructor);

// Timing Event and it's methods