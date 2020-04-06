/*
Exception Handling in JavaScript
    An exception signifies the presence of an abnormal condition which requires special operable techniques. 
    In programming terms, an exception is the anomalous code that breaks the normal flow of the code. 
    Such exceptions require specialized programming constructs for its execution.

Types of Errors
    While coding, there can be three types of errors in the code:

    Syntax Error: When a user makes a mistake in the pre-defined syntax of a programming language, a syntax error may appear.
    
    Runtime Error: When an error occurs during the execution of the program, such an error is known as Runtime error. 
    The codes which create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.
    
    Logical Error: An error which occurs when there is any logical mistake in the program that may not produce the desired output, 
    and may terminate abnormally. Such an error is known as Logical error.


Error Object
    When a runtime error occurs, it creates and throws an Error object. Such an object can be used as a base for the user-defined exceptions too. 
    An error object has two properties:

    name: This is an object property that sets or returns an error name.
    message: This property returns an error message in the string form.
    Although Error is a generic constructor, there are following standard built-in error types or error constructors beside it:

    EvalError: It creates an instance for the error that occurred in the eval(), which is a global function used for evaluating the js string code.
    InternalError: It creates an instance when the js engine throws an internal error.
    RangeError: It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.
    ReferenceError: It creates an instance for the error that occurs when an invalid reference is de-referenced.
    SyntaxError: An instance is created for the syntax error that may occur while parsing the eval().
    TypeError: When a variable is not a valid type, an instance is created for such an error.
    URIError: An instance is created for the error that occurs when invalid parameters are passed in encodeURI() or decodeURI().


Exception Handling Statements
There are following statements that handle if any exception occurs:

    throw statements
    try…catch statements
    try…catch…finally statements.
 */

// Exa1 - try…catch

try {
    var a = ["34", "32", "5", "31", "24", "44", "67"]; //a is an array  
    console.log(a); // displays elements of a  
    console.log(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked  

} catch (e) {
    console.log("There is error which shows " + e.message); //Handling error  

}

/*
Throw Statement
    Throw statements are used for throwing user-defined errors. User can define and throw their own custom errors. 
    When throw statement is executed, the statements present after it will not execute. 
    The control will directly pass to the catch block.
 */
// Exa2
try {
    throw new Error('New Error thrown here by \'throw\' keyword'); //user-defined throw statement.  
}
catch (e) {
    console.log("==> ", e.message); // This will generate an error message  
}


// try…catch…finally statements
// Exa3
try {
    throw new Error('New Error thrown here by \'throw\' keyword'); //user-defined throw statement.  
}
catch (Error) {
    // console.log("==> ", e.message); // This will generate an error message  
}
finally {
    console.log("Finally {} ==> Value of a is 2"); // Finally statemnt must be executed even after catch block executed
}


// Exa4
function First() {
    var a = 123;
    var b = 145;
    var c = a + b;

    try {
        console.log("Value of a: " + a);
        console.log("Value of b: " + b);
        console.log("Sum of a and b: " + d);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
    finally {
        console.log("Finally block will always execute!");
    }
}

First();

try {
    if (denominator === 0);
} catch (e) {
    // throw new Error("Attempted division by zero!");
    console.log('Error("Attempted division by zero!")');
}

try {
    if (denominator === 0);
} catch (e) {
    // throw new RangeError("Attempted division by zero!");
    console.log('RangeError("Attempted division by zero!")');
}

// Custom Exception Objects
function DivisionByZeroError(message) {
    this.name = "DivisionByZeroError";
    this.message = (message || "");
}

DivisionByZeroError.prototype = new Error();
DivisionByZeroError.prototype.constructor = DivisionByZeroError;
var divisionByZeroError = new DivisionByZeroError('Error Message');
console.log(divisionByZeroError);