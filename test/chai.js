//chai - Assert style
//https://www.chaijs.com/api/assert/
/*
var assert = require('chai').assert
try{
d1 = 'String 1';
d2 = 'String 1'
d3 = +'string'
var d4;
var f1 = function(){}
var f2 = function(){throw 'Sample Error'}
var obj1 = {a : 10}
var f3 = function(){
    obj1.a += 10
}
assert(d1==d2, 'D1 and D2 are not same!!')
assert.isEmpty([1,2], 'is not Empty')
assert.isExtensible(new Object(), 'is not extensible')
assert.increasesBy(f3, obj1, 'a', 10, 'Value is not increased');
assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3,4 ], 'not same members');
assert.approximately(1.5, 2, 0.4, 'numbers are approximately close')
assert.throws(f2, 'Error thrown must have this msg');
assert.containsAllKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'baz'], 'does not have all keys')
assert.nestedProperty({ tea: { green: 'matcha' }}, 'tea.green', 'is not a nested property');
assert.property({details: {name:'hello'}}, 'details1', 'not a property')
assert.match('helloWorld', /helloworld/, 'not a wordregex is not matching')
assert.deepOwnInclude({a: {b: 2}}, {a: {b: 2}},'not ownInclude')
assert.ownInclude({ a: 1 }, { a: 1 }, 'not ownInclude')
assert.nestedInclude({name:'ram', age:20, list:{a:1, b:2}}, {'list.a':1}, 'is not nestedInclude')
assert.include([1,2,3,4], 5, 'not included')
assert.instanceOf(f1, Object, 'is not an instance of String')
assert.typeOf(1, 'string', 'is not string')
assert.isString(new String('hello'), 'is not String')
assert.isArray(new Array(), 'is not an Array') //[] or new Array
assert.isObject({name:'hello'}, 'is not an Object')
assert.isFunction(d2, 'is not a function')
assert.exists(d4, 'not existed')
assert.isNaN('', 'Is not NAN') // d3 can be a NaN
assert.isBelow(10, 11, 'actual is not below than expected')
assert.isAtLeast(10, 11, '10 is not equal or greater than 11')
assert.isAbove(new Date('2020-04-09'), new Date('2020-04-14'), 'String is not Above') //accept only numbers and dates
assert.equal('1', 1, 'String is not equal')
assert.deepEqual('1', 1, 'String is not equal')
assert.isNotOk(true, 'value is  false for NotOk')
assert.isOk(false, 'value is false')
assert.fail(d1,d2, 'D1 and D2 are same', '==')
assert.fail()
assert.fail('Failed message')
assert.fail(1, 2, "custom error message", '>');

}
catch(error){
    console.log(error.message)
}
*/
//expect & should
/*
var obj1 = {a:1, b:2, c:3, d:{x:10, y:20, z:30}, e:[10,20,30,40]}
try{
var expect = require('chai').expect
expect(function () {}).to.not.throw();
expect(function () {throw Error('Sample Error')}).to.throw();
expect('string').to.equal('string')

var myObj = {val: 1}
noop = function () {};

expect(noop).to.not.change(myObj, 'val')
expect(noop).to.not.decrease(myObj, 'val')

expect('foobar').to.match(/^foo/)
expect('hello World').to.have.string('world')
expect([1, 2,3,5]).to.have.lengthOf.within(2, 4)
expect(1).to.be.within(1, 3);
function sample(){
    expect(arguments).to.be.arguments;
}
expect(new sample()).to.be.instanceOf(sample)
expect('foo').to.be.arguments
sample(10)
expect([]).to.empty
expect(0).to.not.exist
expect(undefined).to.be.undefined
expect(false).to.be.true
expect(0).to.be.ok
expect('foobar').to.include('foo')
expect(obj1).to.have.property('d')
expect(obj1).to.have.property('e').with.lengthOf(4)
expect(1).to.be.an('string')
}
catch(error){
    console.log(error.message)
}

*/

//should

var should = require('chai').should()
    , obj = {name:'raj', a:1, b:2}
function sample(){
    return {name:'raj', age:20}
}

sample.should.be.an('function')
obj.should.be.an('object')
obj.should.have.property('name').with.lengthOf(4);
