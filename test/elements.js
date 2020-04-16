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

 
describe.only("webdriver io - Selectors : ", function() {
    it("check hyperlinks", function() {
        browser.url("https://www.facebook.com");
        browser.maximizeWindow()
        //browser.findElement('')
        $('=Forgotten account?').click()
        browser.pause(1000)
        browser.back()
        browser.pause(1000)
        $('*=Sign').click()
        browser.pause(1000)
        browser.back()
        txt = $("div[class='mtm mbs _2_68']").getText()
        browser.pause(1000)
        browser.newWindow(txt)
        browser.pause(1000)
        assert.include(browser.getTitle(), 'Facebook');
        
    });

    it('selecting radio and options, dropdowns', function(){
        browser.url("https://www.facebook.com");
        browser.maximizeWindow()
        $('label[class="_58mt"]').click()
        browser.pause(5000)
    })
    
    it('selecting options, dropdowns', function(){
        browser.url("https://www.facebook.com");
        browser.maximizeWindow()
        $('select#day').selectByVisibleText("1")
        $('select#month').selectByIndex(9)
        $('select#year').selectByVisibleText("1990")
        browser.pause(3000)
        //$('div#reg_form_box').$('input#u_0_r').setValue('12332434343')
        browser.pause(5000)
        console.log('Active Element : ', browser.getActiveElement())
        console.log('isElementSelected : ', browser.isElementSelected(browser.getActiveElement().ELEMENT))
        console.log('isElementSelected : ', browser.isElementDisplayed(browser.getActiveElement().ELEMENT))
        console.log('Element Text : ', browser.getElementText(browser.getActiveElement().ELEMENT))
        console.log('Element Tag : ', browser.getElementTagName(browser.getActiveElement().ELEMENT))
        console.log('Element Enabled : ', browser.isElementEnabled(browser.getActiveElement().ELEMENT))
        console.log('Element Click : ', browser.elementClick(browser.getActiveElement().ELEMENT))
        console.log('Element Clear : ', browser.elementClear(browser.getActiveElement().ELEMENT))
        console.log('Element Attribute : ', browser.getElementAttribute(browser.getActiveElement().ELEMENT, 'select'))
        console.log('Page source : ', browser.getPageSource())
        browser.takeScreenshot()
    });

    it.only('should wait until text has changed', () => {
        browser.url("https://www.facebook.com");
        browser.waitUntil(
            () => $("div[class='mtm mbs _2_68']").getText() === 'Birthday',
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    });
    
});