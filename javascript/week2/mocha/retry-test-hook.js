/*
RETRY TESTS
    You can choose to retry failed tests up to a certain number of times. This feature is designed to handle end-to-end tests 
    (functional tests/Selenium...) where resources cannot be easily mocked/stubbed. It's not recommended to use this feature for unit tests.

    This feature does re-run a failed test and its corresponding beforeEach/afterEach hooks, 
    but not before/after hooks. this.retries() has no effect on failing hooks.

    NOTE: Example below was written using Selenium webdriver (which overwrites global Mocha hooks for Promise chain).
*/




describe('Test homepage', () => {

    // Retry all tests in this suite up to 4 times
    this.retries(4);

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

        this.retries(2);
        expect($('.foo').isDisplayed()).to.eventually.be.true;
    });

    // it('verify header "simple" ' , () => {
    //     var txt = $("//*[@id='tag']/em[text()='simple']").getText();
    //     expect(txt).equal('simple');
    //     console.log('::: SIMPLE :::');
    // });

    // it('verify header "flexible" ' , () => {
    //     var txt = $("//*[@id='tag']/em[text()='flexible']").getText();
    //     expect(txt).equal('flexible');
    //     console.log('::: FLEXIBLE :::');
    // });

    // it('verify header "fun" ' , () => {
    //     var txt = $("//*[@id='tag']/em[text()='fun']").getText();
    //     expect(txt).equal('fun');
    //     console.log('::: FUN :::');
    // });


});