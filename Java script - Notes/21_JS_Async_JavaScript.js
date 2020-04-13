/*
Async callbacks:

Async callbacks are functions that are specified as arguments when calling a function which 
will start executing code in the background. When the background code finishes running, it 
calls the callback function to let you know the work is done, or to let you know that something 
of interest has happened. 

*/
//callback
const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 2000);
  };
  console.log('Hello World');
  networkRequest();

  /*
  ES6 Job Queue/ Micro-Task queue:

  ES6 introduced the concept of job queue/micro-task queue which is used by Promises 
  in JavaScript. The difference between the message queue and the job queue is that the
   job queue has a higher priority than the message queue, which means that promise jobs 
   inside the job queue/ micro-task queue will be executed before the callbacks inside the 
   message queue.


   */
  //example
  console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
console.log('Script End');

/*
Promises:

Promises are the new style of async code that you'll see used in modern Web APIs.

then() block --

Both contain a callback function that will run if the previous operation is successful, 
and each callback receives as input the result of the previous successful operation, so 
you can go forward and do something else to it. Each .then() block returns another promise, 
meaning that you can chain multiple .then() blocks onto each other, so multiple asynchronous 
operations can be made to run in order, one after another.

catch() block --

At the end runs if any of the .then() blocks fail — in a similar way to synchronous try...catch 
blocks, an error object is made available inside the catch(), which can be used to report the 
kind of error that has occurred. 

When a promise is created, it is neither in a success or failure state. It is said to be pending.

When a promise returns, it is said to be resolved.

A successfully resolved promise is said to be fulfilled. It returns a value, which can be 
accessed by chaining a .then() block onto the end of the promise chain. The executor function 
inside the .then() block will contain the promise's return value.

An unsuccessful resolved promise is said to be rejected. It returns a reason, an error message 
stating why the promise was rejected. 

*/

//async -- await

/*
The async keyword

First of all we have the async keyword, which you put in front of a function declaration to turn
 it into an async function. An async function is a function which knows how to expect the possibility
  of the await keyword being used to invoke asynchronous code.

await is a new operator used to wait for a promise to resolve or reject. It can only be 
used inside an async function.
*/

//example

function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 200);
    });
  }
  
  function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('lurks');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg(); // 