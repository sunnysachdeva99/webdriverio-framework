
/*
When to use Closure?
Closure is useful in hiding implementation detail in JavaScript. In other words, it can be useful to create private variables or functions.
The following example shows how to create private functions & variable. By using nested function
*/

/*

In the below Exa1, increment(), decrement() and value() becomes public function 
because they are included in the return object, whereas changeBy() function becomes private function 
because it is not returned and only used internally by increment() and decrement().

*/

// Exa1
console.log('=====> Exa1');
var counter = (function () {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    };
})();


console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());


// Exa2
console.log('=====> Exa2');
function OuterFunction() {
    var outerVariable = 1;

    function InnerFunction() {
        console.log(outerVariable);
    }
    InnerFunction();
}

OuterFunction(); // 1



// Exa3
console.log('=====> Exa3');
function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}


var counter = Counter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4


// Closure is valid in multiple levels of inner functions.
// Exa4
console.log('=====> Exa4');
function Counters() {
    
    var counter = 0;

    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
        console.log("counter = " + counter);

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            console.log("counter = " + counter + ", innerCounter = " + innerCounter)
        }, 500);

    }, 1000);
};

Counters();

