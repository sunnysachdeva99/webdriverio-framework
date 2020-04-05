describe("interaction with web elements", function(){

    it("enter the values into text fields", function(){

        browser.url('https://www.freshworks.com/');
        const header = $('h1');
        console.log(header.getText());
        
    });
});