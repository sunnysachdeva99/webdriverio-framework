/*
HOOKS
    With its default "BDD"-style interface, Mocha provides the hooks before(), after(), beforeEach(), 
    and afterEach(). These should be used to set up preconditions and clean up after your tests.

    Tests can appear before, after, or interspersed with your hooks. 
    Hooks will run in the order they are defined, as appropriate; all before() hooks run (once), 
    then any beforeEach() hooks, tests, any afterEach() hooks, and finally after() hooks (once).

EXCLUSIVE TESTS
    The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function. 
    Here's an example of executing only a particular suite:
*/

describe('hooks', () => {

    before(function () {
        // runs once before the first test in this block
        console.log('before => runs once before the first test in this block');
    });

    beforeEach(function () {
        // runs before each test in this block
        console.log('beforEeach => runs before each test in this block');
    });

    afterEach(function () {
        // runs after each test in this block
        console.log('afterEeach => runs after each test in this block');
    });

    after(function () {
        // runs once after the last test in this block
        console.log('after => runs once after the last test in this block');
    });

    it('test 1', () => {
        // test cases
        console.log('test 1 => each test in this block');
    });

    it('test 2', () => {
        // test cases
        console.log('test 2 => each test in this block');
    });

});


describe.only('Test homepage', () => {

    before(() => {
        browser.url('https://mochajs.org/');
        console.log('URL Opened');
    });

    beforeEach(() => {
        console.log('Before Each Test');
    });

    afterEach(() => {
        console.log('After Each Test');
    });

    after(() => {
        browser.closeWindow();
        expect(browser.getUrl()).not.equal('https://mochajs.org/');
        console.log('Browser Closed');
    });

    it('verify title', () => {
        expect(browser.getUrl()).equal('https://mochajs.org/');

        var title = browser.getTitle();
        console.log('Title: ' + title);
        assert.equal(title, 'Mocha - the fun, simple, flexible JavaScript test framework', 'Title not matched');
    });

    it('verify header "simple" ' , () => {
        var txt = $("//*[@id='tag']/em[text()='simple']").getText();
        expect(txt).equal('simple');
        console.log('::: SIMPLE :::');
    });

    it('verify header "flexible" ' , () => {
        var txt = $("//*[@id='tag']/em[text()='flexible']").getText();
        expect(txt).equal('flexible');
        console.log('::: FLEXIBLE :::');
    });

    it('verify header "fun" ' , () => {
        var txt = $("//*[@id='tag']/em[text()='fun']").getText();
        expect(txt).equal('fun');
        console.log('::: FUN :::');
    });


});