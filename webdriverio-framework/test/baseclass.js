describe("Launching Application", function(){
    it("Open URL", function(){
        browser.url('/');

        const search = $('#twotabsearchtextbox');
        search.setValue('Mobiles');
        browser.pause(5000);

        const amazonLabel=$('span.nav-sprite.nav-logo-base');
        let text=amazonLabel.getText();
        console.log(text);

        const submit=$('#nav-search-submit-text');
        submit.click();
        browser.pause(5000);
    })

    it("Get Application Logo ", function(){
        browser.url('/');
        const amazonLabel=$('span.nav-sprite.nav-logo-base');
        var text=amazonLabel.getText();
        console.log("Application Logo: ",text);
        browser.pause(5000);
    })
})

