
/*
EXCLUSIVE TESTS
    The exclusivity feature allows you to run only the specified suite or test-case by appending .only() to the function. 
    Here's an example of executing only a particular suite: 
 */

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


describe.only('Suite 1 ==> Test homepage', () => {

    describe.only('Suite 1 ==> nested describle', function () {
        it('nestted test', () => {
            console.log('::: test under nested describe :::');
        });
    });

    describe('Suite 1 ==> nested describle - test homepage', function () {
        it('verify title', () => {
            expect(browser.getUrl()).equal('https://mochajs.org/');

            var title = browser.getTitle();
            console.log('Title: ' + title);
            assert.equal(title, 'Mocha - the fun, simple, flexible JavaScript test framework', 'Title not matched');
        });
    });

    describe('Suite 1 ==> nested describle - test homepage', function () {

        it('verify header "simple" ', () => {
            var txt = $("//*[@id='tag']/em[text()='simple']").getText();
            expect(txt).equal('simple');
            console.log('::: SIMPLE :::');
        });
    });


    describe('Suite 1 ==> nested describle - test homepage', function () {

        it('verify header "flexible" ', () => {
            var txt = $("//*[@id='tag']/em[text()='flexible']").getText();
            expect(txt).equal('flexible');
            console.log('::: FLEXIBLE :::');
        });
    });

    describe('Suite 1 ==> nested describle - test homepage', function () {

        it('verify header "fun" ', () => {
            var txt = $("//*[@id='tag']/em[text()='fun']").getText();
            expect(txt).equal('fun');
            console.log('::: FUN :::');
        });
    });

});


describe('Suite 2 ==> Test homepage', () => {

    describe.only(' Suite 2 ==> nested describle', function () {
        it('nestted test', () => {
            console.log('::: test under nested describe :::');
        });
    });
});

describe.only('Suite 3 ==> Test homepage', () => {

    describe('suite 3 ==> nested describle', function () {
        it('nestted test', () => {
            console.log('::: test under nested describe :::');
        });
    });

    describe('suite 3 ==> nested describle - test homepage', function () {
        it('verify title', () => {
            expect(browser.getUrl()).equal('https://mochajs.org/');

            var title = browser.getTitle();
            console.log('Title: ' + title);
            assert.equal(title, 'Mocha - the fun, simple, flexible JavaScript test framework', 'Title not matched');
        });
    });
});