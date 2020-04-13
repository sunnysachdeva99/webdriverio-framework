

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('hooks', function() {
  before(function() {
    // runs once before the first test in this block
    console.log('In Before hook')
  });

  after(function() {
    // runs once after the last test in this block
    console.log('In after hook')
  });

  beforeEach(function() {
    // runs before each test in this block
    console.log('In Beforeeach hook')
  });

  afterEach(function() {
    // runs after each test in this block
    console.log('In aftereach hook')
  });
 // test cases
 console.log('In Before hoexecution of cases')
});

describe('avg', function() {
  var sum = 10 + 20 + 30;
  var res = [10,10,30]

  beforeEach(function(done) {
    avg = sum / 3;
    console.log(avg)
    done();

  });

  describe('#find()', function() {
    it('respond with matching records', function(done) {
      
      console.log(res);
      done();
    });
  });
});

beforeEach(function() {
  console.log('before every test in every file');
});

setTimeout(function() {
  // do some setup

  describe('my suite', function() {
    // ...

  });
  console.log("Time up")
}, 5000);