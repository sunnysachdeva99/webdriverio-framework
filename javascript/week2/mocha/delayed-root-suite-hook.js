/*
DELAYED ROOT SUITE
    If you need to perform asynchronous operations before any of your suites are run, 
    you may delay the root suite. Run mocha with the --delay flag. This will attach a 
    special callback function, run(), to the global context:

Command: npm test -- --delay
    Running this command instructs Mocha to attach a special run() callback function to the global context. 
    Calling the run() function will instruct Mocha to run all the test suites that have been described. 
    Hence, run() can be called after the asynchronous operation is completed in order to run the tests.

    For example, add the following code snippet to any of the test files you created earlier 
     (it must never be inside an it() block):
*/

setTimeout(() => {
    // do some setup
console.log('Delaying.....');
    describe('DELAYED ROOT SUITE', () => {

        it('describe test 2', () => {
            // test case
            console.log('describing hooks test 2 => each test in this block');
        });

        it('describe test 2', () => {
            // test case
            console.log('describing hooks test 2 => each test in this block');
        });

    });

    run();
}, 5000);