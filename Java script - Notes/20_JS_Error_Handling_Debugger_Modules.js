
/*

The try...catch statement marks a block of statements to try and specifies a 
response should an exception be thrown.

Syntax:

try {
  try_statements
}
[catch (exception_var_1 if condition_1) { // non-standard
  catch_statements_1
}]
...
[catch (exception_var_2) {
  catch_statements_2
}]
[finally {
  finally_statements
}]

try_statements
    The statements to be executed.

catch_statements_1, catch_statements_2
    Statements that are executed if an exception is thrown in the try-block.

exception_var_1, exception_var_2
    An identifier to hold an exception object for the associated catch-block.


finally_statements
    Statements that are executed after the try statement completes. These statements 
    execute regardless of whether an exception was thrown or caught.
*/
//example
// try {
//     nonExistentFunction();
//   }
//   catch(error) {
//     console.error(error);
//     // expected output: ReferenceError: nonExistentFunction is not defined
//     // Note - error messages will vary depending on browser
//   }
//   //Unconditional catch-block
//   try {
//     throw 'myException'; // generates an exception
//   }
//   catch (e) {
//     // statements to handle any exceptions
//     //logMyErrors(e); // pass exception object to error handler
//   }
//   //finally example
 
    // try {
    //   try {
    //     throw new Error('oops');
    //   }
    //   catch (ex) {
    //     console.error('inner', ex.message);
    //     throw ex;
    //   }
    //   finally {
    //     console.log('finally');
    //     return;
    //   }
    // }
    // catch (ex) {
    //   console.error('outer', ex.message);
    // }
  
  
  // Output:
  // "inner" "oops"
  // "finally"

/*
debugger:

The debugger statement invokes any available debugging functionality, such as setting
 a breakpoint. If no debugging functionality is available, this statement has no effect.

*/
function potentiallyBuggyCode() {
  console.log("Before debugger");
  debugger;
  console.log("After debugger");

  // do potentially buggy stuff to examine, step through, etc.
}

potentiallyBuggyCode()

/*Exporting module features:

The first thing you do to get access to module features is export them. This is done 
using the export statement.

The easiest way to use it is to place it in front of any items you want exported out of 
the module

*/

import { square } from "./1_MJS_module.mjs";

console.log(square(10));
