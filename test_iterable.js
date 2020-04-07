//The iterable is a interface that specifies that an object can be accessible 
//if it implements a method who is key is [symbol.iterator].

//Object that knows how to access items from a collection one at a time, 
//while keeping track of its current position within that sequence.

//There are two iteration protocols: iterable protocol and iterator protocol.

//If you call the next() method after the last value has been returned, 
//the next() returns the result object as follows:
//{done: true: value: undefined}

//Iterable protocol
//An object is iterable when it contains a method called [Symbol.iterator] 
//that takes no argument and returns an object which conforms to the iterator protocol.
//The [Symbol.iterator] is one of the built-in well-known symbols in ES6.

const arr = [1,2,3,4,5];
const iter = arr[Symbol.iterator]();
console.log(iter.next());

const customIterable = {
    [Symbol.iterator]() {
        let counter = 0;
        return {
            next() {
                if (counter < 5) {
                counter++;
                return { done: false, value: counter };
                } else {
                return { done: true, value: undefined };
                }
            }
        }
    }
}

for (const x of customIterable) {
    console.log(x);
}