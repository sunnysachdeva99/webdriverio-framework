/*
asynchronous fucntions
    In asynchronous, each function gets executed in order, 
    but each one is independent with it’s own setTimeout. They won’t wait for the last function to finish before they start.
 */
function asyncPrintString(string) {
    setTimeout(() => {
        console.log(string)
    },
        Math.floor(Math.random() * 100) + 1)
        ;
}

function printAll() {
    asyncPrintString("A");
    asyncPrintString("B");
    asyncPrintString("C");
}
// printAll() //Not in Sequence



// console.log('================This is super annoying, so let’s fix it with a callback.==========================');

/*
Callbacks
    A callback is a function that is passed to another function. When the first function is done, it will run the second function.
*/


function callBackPrintString(string, callback) {
    setTimeout(() => {
        console.log(string)
        callback();
    },
        Math.floor(Math.random() * 100) + 1)
        ;
}

function printsAll() {
    callBackPrintString("A", function () {
        callBackPrintString('B', function () {
            callBackPrintString('C', function () {

            });
        });
    })
}

// printsAll(); //Sequence

// console.log('========code is a lot uglier now, but it works! Each time you call printAll, you get the same result..==========================');


/*
The problem with callbacks is it creates something called “Callback Hell.” 
Basically, you start nesting functions within functions within functions, a
nd it starts to get really hard to read the code.


Promises
    Promises try to fix this nesting problem. Let’s change our function to use Promises.    

    This is called a Promise Chain. You can see that the code returns the result of the function (which will be a Promise), 
    and this gets sent to the next function in the chain.
*/


function promisesPrintString(string) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100) + 1);
    });
}

function printAlls(){
    promisesPrintString('A')
    .then(function(){
        return promisesPrintString('B');
    })
    .then(function(){
        return promisesPrintString('C');
    })
}

// printAlls();




/*
Await
    Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, 
    which is easier for humans to understand.
    The printString function doesn’t change at all from the promise version.
    Again, let’s try to print the letters A, B, C in that order:
 */

async function printAll(){
    await promisesPrintString("A")
    await promisesPrintString("B")
    await promisesPrintString("C")
  }
 // printAll()




