// importing the page class by require
const homePage = require("../pages/homepage");

describe('home page elements handle', function(){

    it('verify home page elements', function(){

        browser.url('https://www.freshworks.com/');

        let pageHeaderText = homePage.pageHeader.getText();
        console.log(pageHeaderText);

        let subHeadingText = homePage.subHeading.getText();
        console.log(subHeadingText);

        homePage.supportLink.click();
        browser.pause(5000);

    })
})