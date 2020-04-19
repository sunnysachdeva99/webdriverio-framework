// importing the page class by require
const homePage = require("../../pages/freshworks-homepage");

describe('home page elements handle', function () {

    it('verify home page elements', function () {

        browser.url('/');
        let pageHeaderText = homePage.pageHeader.getText();
        console.log(pageHeaderText);

        let tagName = homePage.pageHeader;
        console.log(tagName);

        let subHeadingText = homePage.subHeading.getText();
        console.log(subHeadingText);

        homePage.supportLink.click();
        browser.pause(5000);

    })
})