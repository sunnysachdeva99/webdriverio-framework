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

//The following code creates a Sequence object that returns a list of numbers 
//in the range of ( start, end) with an interval between subsequent numbers.

class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex <= this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
};
let evenNumbers = new Sequence(2, 10, 2);

for (const num of evenNumbers) {
    console.log(num);
}

let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while( !result.done ) {
    console.log(result.value);
    result = iterator.next();
}