const herokuappPage = require('../pages/herokuapp');


describe('handle elements', function () {
    it('verify URL & elementS', function () {
        // browser.url('http://the-internet.herokuapp.com');
        // expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/');

        browser.url('/');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/`);
        herokuappPage.clickOnLinkElement(6);
    });


    it('verify checkbox element', function () {
        // expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/checkboxes');
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/checkboxes`);
        let headerTxt = herokuappPage.getHeaderTxt();
        expect(headerTxt).equals('Checkboxes');
        herokuappPage.clickOnCheckBoxElement(1);
        expect(herokuappPage.getCheckBoxElement(1).isSelected()).equals(true);
        browser.pause(5000);
    });
});

