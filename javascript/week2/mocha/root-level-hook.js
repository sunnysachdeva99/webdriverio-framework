/*
ROOT-LEVEL HOOKS
    You may also pick any file and add "root"-level hooks. For example, add beforeEach() outside of all describe() blocks. 
    This will cause the callback to beforeEach() to run before any test case, 
    regardless of the file it lives in (this is because Mocha has an implied describe() block, called the "root suite").
*/

before(function () {
    console.log('once before the test susite in every file');
});

beforeEach(function () {
    console.log('before every test in every file');
});

afterEach(function () {
    console.log('after every test in every file');
});

after(function () {
    console.log('once after the test susite in every file');
});

describe('ROOT-LEVEL HOOKS', () => {

    it('describe test 2', () => {
        // test case
        console.log('describing hooks test 2 => each test in this block');
    });

    it('describe test 2', () => {
        // test case
        console.log('describing hooks test 2 => each test in this block');
    });

});