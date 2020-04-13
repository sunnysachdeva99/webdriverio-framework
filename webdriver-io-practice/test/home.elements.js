const homePage = require('../pages/homepage')

describe("Home page elements handle", function()
{
    it('Verify Home page elements', function()
    {
        browser.url("https://www.freshworks.com");
        let text = homePage.pageHeader.getText();
        console.log(text);
        console.log(homePage.subHeading.getText());
        //homePage.supportLink.click();
        browser.pause(5000);
    });

});