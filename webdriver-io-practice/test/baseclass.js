describe("Launching Application", function(){
    it("Enter value in a field", function(){
        browser.url('/');

        const search = $('#twotabsearchtextbox');
        search.setValue('Mobiles');
        browser.pause(5000);
    });

    it("Get text from the website", function(){
        browser.url('/');
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
    });

    it("Click on a field", function(){
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();
        browser.pause(5000);
    })
});