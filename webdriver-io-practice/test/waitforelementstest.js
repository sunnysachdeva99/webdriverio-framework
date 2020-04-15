
describe("wait for elements tests", function(){
    it.skip("Should wait for button to be enabled and disabled", function(){
        browser.url("http://classic.crmpro.com/register");
        const chkBox = $(`//input[@name='agreeTerms']`);
        const subBtn = $('#submitButton');
        chkBox.click();
        browser.pause(3000);
        subBtn.waitForEnabled(4000);
        assert.equal(true, subBtn.isEnabled());
        chkBox.click();
        browser.pause(1000);
        assert.equal(false, subBtn.isEnabled());
    });

    //Wait until method example

    it("Wait for home page", function(){
        browser.url("https://app.hubspot.com/login");
        const email = $('#username');
        const password = $('#password');
        const loginBtn = $('#loginBtn');
        browser.waitUntil(function()
        {
            return email.isDisplayed() == true
        }, 8000, 'email is not displayed even after the given time')
        email.setValue('naveenanimation30@gmail.com');
        password.setValue('Test@1234');
        loginBtn.click();
        browser.pause(4000);
    });


});