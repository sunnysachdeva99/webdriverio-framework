/*const assert = require('chai').assert;
const app = require('../app');

describe('App', function()
{
    it('app should return hello', function(){
        assert.equal(app(), 'Hello');
    });
});*/
const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;

const app = require('../app');
let sayHelloResult = app.sayHello();
let addNumbersresult = app.addNumbers(5,5);

describe('App', function()
{
    describe('sayHello()', function()
    {
        it('sayHello should return Hello', function(){
            assert.equal(sayHelloResult, 'Hello');
        });
    
        it('sayHello should return string', function()
        {
            assert.typeOf(sayHelloResult, 'String');
        });

    });
 
    describe('addNumbers()', function()
    {
        it('addNumbers should return value', function(){
            assert.equal(addNumbersresult, 10);
        });
    
        it('addNumbers should return value above 5', function(){
            assert.isAbove(addNumbersresult, 5);
        });
    
        it('addNumbers should return number', function()
        {
            assert.typeOf(addNumbersresult, 'Number');
        });
    });

});

