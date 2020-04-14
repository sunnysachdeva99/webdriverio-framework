const loginPage = require('../pages/loginpage')
const loginData = require('../data/logindata')

describe("Login page handle", function(){
    it("clear the username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
        loginPage.enterUserName(loginData.username);
        assert.equal(loginData.username, loginPage.username.getValue());
    });

    it("Enter username", function(){
        //browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName(loginData.username);
        assert.equal(loginData.username, loginPage.username.getValue());
    });
    it("Enter password", function(){
        loginPage.enterPassword(loginData.password);
        assert.equal(loginData.password, loginPage.password.getValue());
    });
    it("click on login button", function(){
        loginPage.clickOnLogin();
    });

});