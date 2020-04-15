const assert = require("chai").assert;
 
describe("WebDriver IO setup : ", function() {
    it("find element by Id", function() {
        browser.url("https://www.facebook.com");
        browser.maximizeWindow()
        email = $("*[id='email']").setValue('ramireddy@gmail.com')
        $("*[id='pass']").setValue('1232321212');
       console.log('Browser Status : ', browser.status())
       browser.pause(1000)
       browser.setTimeouts('implicit', 20000)
        
        assert.include(browser.getTitle(), 'Facebook');
        
    });

    it("change URL", function() {
        browser.navigateTo("https://www.twitter.com");
       console.log('Browser Status : ', browser.status())
       browser.pause(1000)
       $('input[data-testid="SearchBox_Search_Input"]').setValue('corona')
       console.log(browser.getActiveElement())
       browser.pause(1000)
       browser.keys('Enter')
        assert.include(browser.getTitle(), 'Twitter'); 
    });

    it("windows setup", function() {
        browser.back();
       console.log('Window Handles : ', browser.getWindowHandles())
       browser.pause(1000)
       browser.newWindow('https://www.twitter.com')
       browser.pause(10000)
       windows = browser.getWindowHandles()
       browser.switchToWindow(windows[0])
       browser.pause(5000)
       browser.closeWindow()
       browser.switchToWindow(windows[1])
       browser.pause(1000)
       frames = $$('iframe')
       console.log('frames : ', frames)
       //elems = $$('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]')
       //console.log('Elements : ', elems)
       //elem = browser.findElementsFromElement(elems, "div[class='css-1dbjc4n r-14lw9ot']")
       //console.log('Elem from elemts : ', elem)
       //browser.pause(5000)
        assert.include(browser.getTitle(), 'Twitter');
    });
});