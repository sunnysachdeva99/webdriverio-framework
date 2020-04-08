var fruits;
var myObj;
var police;
var myGirls;
var myBoys;
var pupils;
var myNewComers;
var pupilsList;
var listPupils;
var flag;
var fn;
var ages;

// array literal // it's always recommended
fruits = ["mango", "apple", "banana"]
console.log(fruits);


// new keyword
fruits = new Array("kiwi", "papaya", "grapes");
console.log(fruits);

console.log(fruits[0]);

fruits[0] = "orange"; // adding / modifing the array element value to a specific index value
console.log(fruits);
console.log(fruits[0]);



/*
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
But, JavaScript arrays are best described as arrays.
Arrays use numbers to access its "elements". In this example, person[0] returns John:
*/

console.log(typeof fruits); // objects
console.log(fruits.constructor); // Function Arrayss
console.log(fruits[0]);


/*
Array Elements Can Be Objects
JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
*/

//Array Properties and Methods
console.log(fruits.length); // property
fruits.push("lemon");       // method - adding a new element to arrya
fruits[fruits.length] = "sapota";   // property - adding a new element to array at last element by length property dynamically

console.log(fruits[0]);                 // accessing the first index element
console.log(fruits[fruits.length - 1]); // accessing the last index element



// Looping Array Elements
for(let i = 0; i < fruits.length; i++){
    console.log('Fruit At Index Value: ' + i + " ==> " + fruits[i])
}


// forEach...
// syntax - 
fruits.forEach(arrayFun);

function arrayFun(value){
    console.log(value);
}

// forEach with anonymous function
var fruitsList = "";
fruits.forEach(function(value){
fruitsList += value + " ";
});
console.log(fruitsList);



/*
Associative Arrays: JS does NOT support associative array

    Many programming languages support arrays with named indexes.
    Arrays with named indexes are called associative arrays (or hashes).
    JavaScript does not support arrays with named indexes.
    In JavaScript, arrays always use numbered indexes.  


WARNING !!
    If you use named indexes, JavaScript will redefine the array to a standard object.
    After that, some array methods and properties will produce incorrect results.
*/

// Issue with Associateive Arrays

police = [];
console.log(police.length); // 0
console.log(police); // empty array

police["firstname"] = "John";
police["lastname"] = "Doe";

console.log(police.length); // 0
console.log("==> ", police); // arrays Objects --- to find out what is this
console.log("==> ", police[0]); // undefined

/*
The Difference Between Arrays and Objects
    In JavaScript, arrays use numbered indexes.  
    In JavaScript, objects use named indexes.
    Arrays are a special kind of objects, with numbered indexes.
*/

// Objects

myObj = {
    "fname":"Mach",
    "lname":"Merry"
}
console.log("Before ==> ", myObj); // 0
myObj.fname = "Harry";
console.log("After ==> ", myObj); // 0



/*
When to Use Arrays. When to use Objects.
    JavaScript does not support associative arrays.
    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.

Avoid new Array()
    There is no need to use the JavaScript's built-in array constructor new Array(). - Not Recommended
    Use [] instead. - Recommended
    These two different statements both create a new empty array named points:

    The new keyword only complicates the code. It can also produce some unexpected results:
*/

var arr;
arr = new Array(); // not recommended
arr = []; // recommended


arr = new Array(10, 50, 30, 20, 59); // not recommended
console.log('new keyword == > ', arr);

arr = [10, 50, 30, 20, 59]; // recommended
console.log('No new keyword == > ', arr);


// Different behave with new keyword when specify with number

arr = new Array("Kisko");
console.log('new keyword - name == > ', arr[0]);

arr = new Array(5); // here it defines the SIZE (length) of array if we define with only ONE number
console.log('new keyword - array number == > ', arr);
console.log('new keyword - number == > ', arr[0]);
arr[0] = 67;
console.log('new keyword - number == > ', arr[0]);


arr = new Array(3, 4);
console.log('new keyword - two numbers == > ', arr[1]);

arr = [10];  // here it does NOT define the SIZE array
console.log('No new keyword - array number == > ', arr[0]);


/*
How to Recognize an Array
*/

console.log(typeof arr);            // objects // not able to recognize the Array but array is object in JS
console.log(arr.constructor);       // Array() function
console.log(Array.isArray(arr));    // true (ECMAScript 5 is not supported in older browsers.)
console.log(arr instanceof Array);    // true

// customized function to recognize Array
function isArr(x){
    return x.constructor.toString().indexOf("Arrays") > -1;
}

isArr(arr); // true




//JavaScript Array Methods

console.log(fruits.toString())      //grapes,orange,papaya,lemon,sapota - to convert array to string
console.log(fruits.join(' * '))     //grapes * orange * papaya * lemon * sapota


// Popping items out of an array,The pop() method removes the last element from an array and also return the removed element

console.log(fruits.pop()) // remvoe the last element and return that removed element in console
console.log(fruits.toString())



// pushing items into an array, The push() method adds a new element to an array (at the end):
//fruits.push('sapota');
console.log(fruits.toString())
var loc = fruits.push('sapota'); // it will add and give the lengh of array
console.log(loc) // 6


// The shift() method removes the first array element

// fruits.shift(); // grapes removed
console.log(fruits.shift()); // it removed the first element and retrun that removed element
console.log("after shift ==> ", fruits.toString()) 
console.log("after shift ==> ", fruits[0]) 

// fruits.unshift("dragon");
console.log(fruits.toString()) 
console.log(fruits.length) 
console.log(fruits.unshift("dragon")); // it will add the element in the first index (where element shifted)and give the lengh of array
console.log(fruits.toString()) 

fruits[fruits.length-1] = "strawberry"; // it will add the element in the last index like push method
console.log(fruits.toString())


// Deleting Elements, it deletes the element and leave that element placeholder empty
// Using delete may leave undefined holes in the array. Use pop() or shift() instead.
delete fruits[3];
console.log(fruits.toString())
console.log(fruits[3]) // undefined as there is not element available in this index as it's a placeholder after deleted
fruits[3] = "melon";
console.log(fruits.toString())


// Splicing an Array

// Using splice() method to add new elements to an array:

fruits.splice(2,0,"custapple", "muskmelon"); // add two new elements at index value 2 and no elementes deleted as 2nd param is 0
console.log("splice ==>", fruits.toString())



// Using splice() method to remove Elements from an array. 
// if second param is > 0, then those elements will be removed from array as example below.
// below example - add two new elements at index value 2 and the two elements will be removed from that index value as second param 2

fruits.splice(2,2,"lichi", "guava"); // 
console.log("splice remove ==> ", fruits.toString())


// Using splice() to Remove Elements
// you can use splice() to remove elements without leaving "holes" in the array:

fruits.splice(0,2); 
console.log("splice remove ==> ", fruits.toString())


// Merging (Concatenating) Arrays

myGirls = ["Rina", "Tina", "Sina"];
myBoys = ["Manas", "Sanaj", "Hiran"];

pupils = myBoys.concat(myGirls); //concatenating two arrays
console.log(pupils);

myNewComers = ["Riaan", "Bhavesh", "Khushi"];
pupils = myBoys.concat(myGirls, myNewComers); //concatenating more than two arrays
console.log(pupils);


// The concat() method can also take strings as arguments:
pupilsList = pupils.concat("Purnima");
console.log("pupilsList ==> " , pupilsList);


/*
Slicing an Array
The slice() method slices out a piece of an array into a new array.
This example slices out a part of an array starting from array element 1 ("Manas"):
*/

listPupils = pupilsList.slice(1); // it will slice out 1 element from beginning and return a new array with original array excluding the sliced out element
console.log("slice listPupils ==> " , listPupils);


var lp = listPupils.slice(1, 3); // it slices out the element based on the params and returns the new array with sliced out elements
console.log("==> ", lp); 
console.log("slice listPupils ==> " , listPupils);

var pl = listPupils.slice(-3, -1); // it slices out the element based on the params and returns the new array with sliced out elements. starts from the end of the array
console.log("==> ", pl); 
console.log("slice listPupils ==> " , listPupils);



// Sort() method
// When the sort() method compares two values, 
// it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

arr = [10, 50, 30, 435, 20, 59]; // recommended
console.log('Before Sort == > ', arr);
arr.sort(                       // ascending order
    function(a,b){
        return a-b;
    }
);

console.log('After Sort (ascending) == > ', arr);


arr.sort(function(a,b){
    return b-a;
});
console.log('After Sort (descending) == > ', arr);



// Sorting (ascending & descending orrder ) for String
listPupils.sort();
console.log("After Sorting (ascending) ==> " , listPupils);

listPupils.reverse();
console.log("After Sorting (descending) ==> " , listPupils);



// reduceRight method
arr = [1, 2, 3];
let reduceleft = arr.reduce(function(acc, curr){
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr;
});
console.log(reduceleft);


// reduceRight method
arr = [1, 2, 3];

let reduceright = arr.reduceRight( (acc, curr) => {
    console.log('acc: ', acc, 'curr:', curr);
    return acc + curr;
});
console.log(reduceright);

// Array prototype Constructor - you can create new customized new method to Array
Array.prototype.myUcase = function(){
    for(var i = 0; i < this.length; i++){
        this[i] = this[i].toUpperCase();
    }
}

fruits.myUcase();
console.log(fruits);

Array.prototype.myLcase = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toLowerCase();
    }
}

fruits.myLcase();
console.log(fruits);


//Array map() Method

arr = [4, 9, 16, 25];
var ar = arr.map(Math.sqrt)
console.log(ar);

var multi = (num) => {
    return num * 10;
}
console.log("map ==> ", arr.map(multi));


// keys() method - will give the key (index value ) of element
var fx = arr.keys();

for (x of fx){
    console.log("keys ==> ", x);
}

// includes() method

flag = arr.includes(16);
console.log("includes ==> ", flag);

flag = fruits.includes("lichi", 0);
console.log(fruits);
console.log("includes ==> ", flag);


// Array from() Metho
// Create an Array from a String:

var myar = Array.from('This is a book');
console.log(myar);


// findIndex() method
ages = [3, 18, 28, 20];

console.log(ages);
fn = ages.findIndex(function(age){
    return age >= 18;
});
console.log("findIndex of 18==> ", fn);


// find() method - Get the value of the first element in the array that has a value of 18 or more:, it returns only one element 
fn = ages.find(function(age){
    return age >= 18;
});
console.log("find of 18==> ", fn);

// filter() Method - Return an array of all the values in the ages array that are 18 or over: it returns the elements array
fn = ages.filter(function(age){
    return age >= 18;
});
console.log("filter of 18==> ", fn);

// every() Method, Check if all the values in the ages array are 18 or over:
fn = ages.every(function(age){
    return age >= 18;
});
console.log("every of 18==> ", fn);


// fill() Method
// Fill all the array elements with a static value:
var ft;
var tf;

ft = ["Banana", "Orange", "Apple", "Mango"];
tf = ft.fill("Kiwi");
console.log("fill ==> ", tf);

ft = ["Banana", "Orange", "Apple", "Mango"];
console.log("fill ==> ", ft);
tf = ft.fill("kiwi", 1, 3);
console.log("fill ==> ", tf);


// entries() Method, Create an Array Iterator object, and create a loop that iterates each key/value pair:
// The entries() method returns an Array Iterator object with key/value pairs.
// Note: This method does not change the original array.

ft = ["Banana", "Orange", "Apple", "Mango"];
tf = ft.entries();

for (x of tf){
    console.log("entries ==> ", x);   
}


// copyWithin() Method
console.log(fruits);
console.log("copyWithin ==> ", fruits.copyWithin(2, 0, 2));



























