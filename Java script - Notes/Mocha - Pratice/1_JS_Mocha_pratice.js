/*

HOOKS

With its default "BDD"-style interface, Mocha provides the hooks before(), after(), 
beforeEach(), and afterEach(). These should be used to set up preconditions and clean up after your tests.


DESCRIBING HOOKS

Any hook can be invoked with an optional description, making it easier to pinpoint errors in your tests.
 If a hook is given a named function, that name will be used if no description is supplied.

 beforeEach(function() {
  // beforeEach hook
});

beforeEach(function namedFun() {
  // beforeEach:namedFun
});

beforeEach('some description', function() {
  // beforeEach:some description
});

ASYNCHRONOUS HOOKS:

All hooks (before(), after(), beforeEach(), afterEach()) may be sync or async as well, behaving much like a 
regular test-case. 

ROOT-LEVEL HOOKS
You may also pick any file and add "root"-level hooks. For example, add beforeEach() outside of all describe() blocks. This will cause the callback to beforeEach() to run before any test case, regardless of the file it lives in (this is because Mocha has an implied describe()
 block, called the "root suite").

 DELAYED ROOT SUITE:
    If you need to perform asynchronous operations before any of your suites are run, you may delay the root suite. Run mocha with the --delay flag. This will attach a special callback function, run(), 
    to the global context
*/
//

