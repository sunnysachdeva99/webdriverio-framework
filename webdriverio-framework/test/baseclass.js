describe("Launching Application", function(){
    after (function(){
        console.log('----After Test suite------');
    })
    before (function(){
        console.log('----Before Test suite------');
    })

    afterEach(function(){
        console.log('-----After Each -------');
    })

    beforeEach(function(){
        console.log('-----Before Each -------');
    })
    it("Open URL", function(){
        browser.url('/');

        const search = $('#twotabsearchtextbox');
        search.setValue('Mobiles');
        browser.pause(5000);
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

    it("Get Result count ", function(){
        browser.url('/');
        const amazonLabel=$('span.nav-sprite.nav-logo-base');
        var text=amazonLabel.getText();
        console.log("Application Logo: ",text);
        browser.pause(5000);
    })

})

