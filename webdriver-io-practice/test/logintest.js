const loginPage = require('../pages/loginpage')

describe("Login page handle", function(){
    it("clear the username", function(){
        browser.url(`${browser.options.baseUrl}/login`);
        loginPage.username.click();
        loginPage.username.clearValue();
        assert.equal('', loginPage.username.getValue());
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
    });

    it("Enter username", function(){
        //browser.url(`${browser.options.baseUrl}/login`);
        loginPage.enterUserName('tomsmith');
        assert.equal('tomsmith', loginPage.username.getValue());
    });
    it("Enter password", function(){
        loginPage.enterPassword('SuperSecretPassword');
        assert.equal('SuperSecretPassword', loginPage.password.getValue());
    });
    it("click on login button", function(){
        loginPage.clickOnLogin();
    });

});