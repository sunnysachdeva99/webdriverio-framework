
/*
INCLUSIVE TESTS
This feature is the inverse of .only(). By appending .skip(), you may tell Mocha to simply ignore test case(s). 
Anything skipped will be marked as pending, and reported as such. Here's an example of skipping an individual test:
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
    // expect(browser.getUrl()).not.equal('https://mochajs.org/'); 
    console.log('Browser Closed');
});


describe.skip('Suite 1 ==> Test homepage', () => {

    describe.skip('Suite 1 ==> nested describle', function () {
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

    describe.skip(' Suite 2 ==> nested describle', function () {
        it('nestted test', () => {
            console.log('::: test under nested describe :::');
        });

        it('nestted test', () => {
            if ('Skip'.equal('Skips')) {
                console.log('Not Skipped');
            } else {
                console.log('Skipped');
                this.skip();
            }

        });
    });
});

describe.skip('Suite 3 ==> Test homepage', () => {

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

