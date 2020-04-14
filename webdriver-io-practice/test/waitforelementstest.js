
describe("wait for elements tests", function(){
    it("Should wait for button to be enabled and disabled", function(){
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

});