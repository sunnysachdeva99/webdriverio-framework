// Control Structures

// Conditional
// Looping
// Jumping

// Conditional Structures (If-else, switch)

var day;
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }





  // Looping Structures (for loop, while, do-while)

  for(let i = 0; i < 10; i++){
      console.log(i);
  }


  // We can initialize any number of variables in Statement1 area
  var cars = ["BMW", "Volvo", "Saab", "Ford"];
  var i, len, text;
  for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + " ";
  }
  console.log(text);
  console.log('Initialize Any Number Of Variables In Statement1 Ends');
  

  // We can OMIT first statement for initializing the variable
  var x = 2;
  for(; x < 10; x++){
    console.log(x);
}
console.log('Omit Variable Initilization In Statement1 Ends');


// We can OMIT Statement2 for conditions but make sure break statement is in the block 
// otherwise it will go for infinite so issue to browser
var x = 2;
for(; ; x++){
  console.log(x);
  break;
}
console.log('Omit Conditions In Statement2 Ends');


// We can OMIT Statement2 for conditions but make sure break statement is in the block 
// otherwise it will go for infinite so issue to browser
var a = 0;
var car = ["BMW", "Volvo", "Saab"];
var lens = car.length;
var txt = "";
for (; a < lens; ) {
  txt += car[a] + " ";
  a++;
}
console.log(txt);
console.log('Omit Initial Value Increment In Statement3 Ends');




// Loop 'for/in' statement loops through the properties of an object:

var student = {
    name: "Kailash",
    age: 15
};
var z; // he acts as key here like student['name']
var texts = "";
for(z in student){
    console.log(z); 
    texts +=student[z] + " ";   
}
console.log(texts);

/*
Loop 'for/of' statement loops through the values of an iterable objects
it lets you loop over data structures that are iterable such as Arrays, Strings, Maps, NodeLists, and more

syntax
for (variable of iterable) {
    // code block to be executed }

    variable - For every iteration, the value of the next property of array is assigned to the variable. Variable can be declared with const, let, or var.
    iterable - An object that has iterable properties.
*/

// Looping over a Array
var bikes = ['Pulsar', 'FZ', 'Unicorn'];
var b;
for (b of bikes) {
  console.log(b);
}

//Looping over a String
var msg = 'JavaScript';
var c;
for (c of msg) {
    console.log(c);
}



// Jumping Structures (break, continue)

// 'break' statement can be used to jump out of a loop.  
var d;
for (d = 0; d < 10; d++) {
  if (d === 3) { 
      break; 
    }
  console.log("The number is " + d + " ");
}


// 'continue' statement can be used to jump over a loop.  
// statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop

var e;
for (e = 0; e < 10; e++) {
  if (e === 3) { 
      continue; 
    }
  console.log("The number " + e + " "); // continue breaks one iteration when e = 3 and continue to next iteration upto condifion satisfied 
}                                        //  and The number is 3 not displayed


// JavaScript Labels
/*

The 'continue' statement (with or without a label reference) can only be used to skip one loop iteration.
The 'break' statement, without a label reference, can only be used to jump out of a loop or a switch.
    With a label reference, the break statement can be used to jump out of any code block:
*/


// 'break' statement with a label reference
var vechiles = ["Truck", "Bus", "Jeep", "Car"];
var mess = "";
lists: {
    mess += vechiles[0] + " "; 
    mess += vechiles[1] + " "; 
    break lists;
    mess += vechiles[2] + " "; 
    mess += vechiles[3] + " "; 
}
console.log(mess);



let str = "";
loop1:
for (let k = 0; k < 5; k++) {
  if (k === 1) {
    continue loop1;
  }
  str = str + k;
}
console.log(str); // "0234"
