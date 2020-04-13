describe('Testing browser window tabs', ()=>{

    it('click on contactus button', ()=>{
    
        browser.url('http://webdriveruniversity.com');
        $('a#contact-us h1').click();
        browser.pause(3000);
        // var tabIds = browser.getTabIds();
        var contactUsTab = browser.getWindowHandles();
        browser.switchToWindow(contactUsTab[0]);
        browser.pause(2000);
        browser.switchToWindow(contactUsTab[1]);
        browser.pause(2000);
        //To close current window tab
        browser.closeWindow();
        browser.pause(2000);
    });

    });