const blazePage = require("../../pages/blaze-homepage");

describe('BlazePage elements handle', () =>{

    it('verify text of all main links', () => {
        browser.url('/');
        browser.pause(5000);
        blazePage.getTextForLi;
        blazePage.mainLinksElementText;
    });
});