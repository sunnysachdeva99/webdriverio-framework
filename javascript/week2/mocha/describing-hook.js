/**
 DESCRIBING HOOKS
    Any hook can be invoked with an optional description, making it easier to pinpoint errors in your tests.
    If a hook is given a named function, that name will be used if no description is supplied.
 */

describe('DESCRIBING HOOKS', () => {

    beforeEach(function () {
        // beforeEach hook
        console.log('beforeEach hook');
    });

    beforeEach(function namedFun() {
        // beforeEach:namedFun
        console.log('beforeEach:namedFun');
    });

    beforeEach('some description', function () {
        // beforeEach:some description
        console.log('beforeEach:some description');
    });

    it('describe test', () => {
        // test case
        console.log('describing hooks test => each test in this block');
    });

});