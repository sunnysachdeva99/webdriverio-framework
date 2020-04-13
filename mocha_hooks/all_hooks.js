// before(function() {
//     console.log("'before' root-level pre-hook")
// });
// after(function() {
//     console.log("'after' root-level post-hooks")
// });
// beforeEach(function() {
//     console.log("'beforeEach' root-level pre-hook")
// });
// afterEach(function() {
//     console.log("'afterEach' root-level post-hooks")
// });
describe("all_hooks.JS - This is Describe block1", function() {
    // before(function() {
    //     console.log("'before' pre-hook inside Describe block1")
    // });
    // after(function() {
    //     console.log("'after' post-hooks Describe block1")
    // });
    // beforeEach(function() {
    //     console.log("'beforeEach' block1-level pre-hook")
    // });
    // afterEach(function() {
    //     console.log("'afterEach' block1-level post-hooks")
    // });
    it("it1 block1", function() {
        console.log("=====block1 test1=======")
    })
    it("it2 block1", function() {
        console.log("=====block1 test2=======")
    })
});
describe("all_hooks.JS - This is Describe block2", function() {
    // before(function() {
    //     console.log("'before' pre-hook inside Describe block2")
    // });
    // after(function() {
    //     console.log("'after' post-hooks Describe block2")
    // });
    it("it1 block2", function() {
        console.log("=====block2 test1=======")
    });
    it("it2 block2", function() {
        console.log("=====block2 test2=======")
    })
}); 


// EXCLUSIVE TESTS
// describe('Array', function() {
//     describe.only('#indexOf()', function() {
//       console.log("============This is the only test to run===========")
//     });
//   }); 

// Here's an example of executing an individual test case   
// describe('Array', function() {
//     describe('#indexOf()', function() {
//       it.only('should return -1 unless present', function() {
//         // ...
//       });
  
//       it('should return the index when present', function() {
//         // ...
//       });
//     });
//   });


// PENDING TESTS
// describe('Array', function() {
//     describe('#indexOf()', function() {
//       // pending test below
//       it('should return -1 when the value is not present');
//     });
//   });

// INCLUSIVE TESTS
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it.skip('should return -1 unless present', function() {
//       // this test will not be run
//     });

//     it('should return the index when present', function() {
//       // this test will be run
//     });
//   });
// });

// You can also put .skip() on an entire suite. This is equivalent to appending .skip() onto all tests in the suite. Hooks in the suite are also skipped.
// describe('Array', function() {
//   describe.skip('#indexOf()', function() {
//     it('should return -1 unless present', function() {
//       // this test will not be run
//     });
//   });
// });

//WE CAN SKIP THE TEST CONDITIONALLY
// it('should only test in the correct environment', function() {
//     if (/* check test environment */) {
//       // make assertions
//     } else {
//       this.skip();
//     }
//   });