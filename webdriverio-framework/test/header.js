describe("Get text scenario: ", function(){
    it("Print Text", function(){
        browser.url('https://webdriver.io/');
        browser.pause(5000);
        const header = $('small.tagline');
        console.log(" Text is: ", header.getText());
        browser.pause(5000);
    })
})
