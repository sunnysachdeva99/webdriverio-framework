/*
Iterators:

In JavaScript an iterator is an object which defines a sequence and potentially a return value 
upon its termination.

Specifically, an iterator is any object which implements the Iterator protocol by having a next() 
method returns an object with two properties:

value:

The next value in the iteration sequence.

done:

This is true if the last value in the sequence has already been consumed. If value is present alongside 
done, it is the iterator's return value.

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false }
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

*/
//example
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); 
// [5 numbers returned, that took interval in between: 0 to 10]

/*
Generator functions:

When called, generator functions do not initially execute their code. Instead, they return a special 
type of iterator, called a Generator. When a value is consumed by calling the generator's next method, 
the Generator function executes until it encounters the yield keyword.

The function can be called as many times as desired, and returns a new Generator each time. Each 
Generator may only be iterated once.


*/

//example
function* fibonacci() {
    let fn1 = 0;
    let fn2 = 1;
    while (true) {  
      let current = fn1;
      fn1 = fn2;
      fn2 = current + fn1;
      let reset = yield current;
      if (reset) {
          fn1 = 0;
          fn2 = 1;
      }
    }
  }
  
  const sequence = fibonacci();
  console.log(sequence.next().value);     // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
  console.log(sequence.next().value);     // 5
  console.log(sequence.next().value);     // 8
  console.log(sequence.next(true).value); // 0
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
