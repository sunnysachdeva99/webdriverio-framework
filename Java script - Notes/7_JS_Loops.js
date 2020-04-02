/*
The statements for loops provided in JavaScript are:

    for statement
    do...while statement
    while statement
    labeled statement
    break statement
    continue statement
    for...in statement
    for...of statement
*/
/*
for statement:

A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

A for statement looks as follows:

for ([initialExpression]; [condition]; [incrementExpression])
  statement
*/
//example -- for loop
x=10
for(i=0;i<x;i++){
    console.log(i)
}

/*
do...while statement:

The do...while statement repeats until a specified condition evaluates to false.

A do...while statement looks as follows:

do
  statement
while (condition);

while statement:

A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:

while (condition)
  statement

*/
//example-while
let n = 0;
let j = 0;
while (n < 3) {
  n++;
  j += n;
  console.log(j)
}

/*
for...in statement:

The for...in statement iterates a specified variable over all the enumerable properties of an object. For each distinct property, JavaScript executes the specified statements. A for...in statement looks as follows:

for (variable in object)
  statement

for...of statement:

The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.

for (variable of object)
  statement

*/
//example 
const arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}