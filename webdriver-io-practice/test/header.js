describe("Launching Application", function(){
    it("Get header value", function(){
        browser.url('https://freshworks.com');

        const header = $('h1');
        let text = header.getText();
        console.log(text);
    });
});