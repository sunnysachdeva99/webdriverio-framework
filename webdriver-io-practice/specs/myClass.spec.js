var MyClass = require("../src/MyClass.js");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;

describe("Test suite", function()
{
    it('Test add method', function()
    {
        expect(myObj.add(1,2)).to.be.equal(4);
    });
});