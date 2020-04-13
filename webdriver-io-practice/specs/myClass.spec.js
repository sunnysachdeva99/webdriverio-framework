var MyClass = require("../src/MyClass.js");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;
var sinon = require("sinon");
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);

describe("Test suite", function()
{
    it('Test add method', function()
    {
        expect(myObj.add(1,2)).to.be.equal(3);
    });

    //this is for sinon spy functionality.
    it('Spy the add method', function()
    {
        var spy = sinon.spy(myObj, "add");
        myObj.callAddFn(10,10);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(10,10)).to.be.true;
    });

    //this is for moch the function
    it('Mock the sayMockFun method', function()
    {
        var mock = sinon.mock(myObj);
        var expectation = mock.expects("sayMockFun");
        expectation.exactly(1);
        myObj.add(10,10);
        mock.verify();

    });

});

describe("stub examples", function()
{
    after(function()
    {
        console.log("after the test suite");
    });
    before(function()
    {
        console.log("before the test suite");
    });
    afterEach(function()
    {
        console.log("after each test case");
    });

    //Important example for the beforeEach() method usage. sinon.restore();
    //TypeError: Attempted to wrap add which is already wrapped
    beforeEach(function()
    {
        console.log("before each test case");
        sinon.restore();
        //It will restore all the kinds of wrappers by spy, mock, stubs
    });
    //this is for stub the function add
    it('stub the add method', function()
    {
        //using the add method **
        var stub = sinon.stub(myObj, "add");
        stub.withArgs(10,20).onFirstCall().returns(100);
        expect(myObj.add(10,20)).to.be.equal(100);
    });

});

describe("Promise examples", function()
{
    after(function()
    {
        console.log("after the test suite");
    });
    before(function()
    {
        console.log("before the test suite");
    });
    afterEach(function()
    {
        console.log("after each test case");
    });
    beforeEach(function()
    {
        console.log("before each test case");
    });
    //this is for stub the function add
    it('test the Promise method', function()
    {
       this.timeout(0);
       return expect(myObj.testPromise()).to.eventually.equal(9);
    });

});