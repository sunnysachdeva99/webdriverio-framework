var chai = require("chai");
var expect = chai.expect;

describe("Dummy test suite", function()
{
it("Dummy test case", function()
{
 expect(true).to.be.true;
});
});

beforeEach(function()
{
console.log("===========Root Level Hook========")
});