describe('Testing browser window tabs', () => {
    beforeEach('Open HomrPage', () => {
        browser.setWindowSize(1800, 1200);
        // browser.url('http://webdriveruniversity.com');
        browser.url('./');
    });
    afterEach('close current window', () => {
        browser.closeWindow();
    });

    it('click on contactUs By ID', () => {
        $('#contact-us').click();
        browser.pause(3000);
    });
    it('click on contactUs By class', () => {
        $('.section-title').click();
        browser.pause(3000);
    });
    it('click on contactUs By XPATH', () => {
        $("//h1[text()='CONTACT US']/../..").click();
        browser.pause(3000);
    });

    it('click on contactUs By CSS', () => {
        $("#contact-us h1").click();
        browser.pause(3000);
    });

});