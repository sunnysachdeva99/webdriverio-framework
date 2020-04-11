/*
 ASYNCHRONOUS HOOKS
    All hooks (before(), after(), beforeEach(), afterEach()) may be sync or async as well, behaving much 
    like a regular test-case. 
 */

describe('ASYNCHRONOUS HOOKS', () => {

    beforeEach(function () {
        // beforeEach hook
        console.log('beforeEach hook');
    });

    it('describe test 1', () => {
        // test case
        console.log('describing hooks test 1 => each test in this block');
    });

    describe('nested describe', () => {

        it('nested describing test 2', () => {
            // test case
            console.log('nested describing hooks test 2 => each test in this block');
        });

    });

});