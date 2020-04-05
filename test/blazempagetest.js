const blazePage = require("../pages/blazepage");

describe('BlazePage elements handle', () =>{

    it('verify text of all main links', () => {
        browser.url('https://www.blazemeter.com/');
        browser.pause(5000);
        blazePage.getTextForLi;
        blazePage.mainLinksElementText;
    });
});