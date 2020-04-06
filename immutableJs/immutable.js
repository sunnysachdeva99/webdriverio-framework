const I = require('immutable');
// console.log(I.List(['a','b']));
console.log("______________________________")
var Person = {fname: "Raj", laname: "Gade"};
var PersonImmutable  = I.Record(Person);
var Person1 = new PersonImmutable();

console.log(Person)
console.log(Person1.fname)

var Person2 = Person1.set('fname', 'Pravalika')
console.log(Person)
console.log(Person2)