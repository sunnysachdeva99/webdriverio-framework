//functions

let func = function(a,b,c){
    return a+b+c
}

console.log(func(10, 20, 30));

let f1 = (x, y, z) => x*y*z;
console.log(f1(10, 20, 30));

var f2 = (m, n, k) => m + n+ k;
console.log(f2(10, 20, 30));

let val = 22;
let check = (val < 21) ?
() => console.log('Value is less than 21'):
() => console.log('value is greter than 21');

check();