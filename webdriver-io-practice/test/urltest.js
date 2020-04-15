/*
PS D:\WebDriver-IO\WDWS\webdriver-io-practice> npm test -- --spec ./test/url.test.js
> wdio wdio.conf.js "--spec" "./test/url.test.js"
Please pass the correct ENV value: ENV=qa|dev|stage|prod
*/

describe("Test different environments", function(){
    it("verify the url", function(){
        browser.debug();
        browser.url('/');
    
    });
});