describe("Test the various WebdriverIO Wait Commands", () => {
    beforeEach(function() {
      browser.url("http://webdriveruniversity.com");
    });
  
//     it("Test waitForExist", () => {
//       //https://webdriver.io/docs/api/element/waitForExist.html
//       const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
//       clickByXpathSelector.click();
//   browser.pause(2000);
//   browser.switchWindow("WebDriver | Ajax-Loader");
//       //Wait for an element for the provided amount of milliseconds to be present within the DOM.
//       const clickMeButton = $("//span[@id='button1']/p[.='CLICK ME!']");
//     //   browser.pause(5000);
//       clickMeButton.waitForExist(10000);
//       clickMeButton.click();
//     }); //test will fail... even though its in the DOM doesnt mean it clickable
  
    it("Test waitForDisplayed", () => {
      //https://webdriver.io/docs/api/element/waitForDisplayed.html
      const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
      clickByXpathSelector.click();
      browser.pause(2000);
      browser.switchWindow("WebDriver | Ajax-Loader");
  
      //Wait for an element for the provided amount of milliseconds to be present within the DOM.
      const clickMeButton = $('//*[text()="CLICK ME!"]/..');
      clickMeButton.waitForDisplayed(2000);
      clickMeButton.click();
    }); //test will pass...
  
    // it("Test waitForEnabled", () => {
    //   //https://webdriver.io/docs/api/element/waitForEnabled.html
    //   const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
    //   clickByXpathSelector.click();
    //   browser.switchWindow("WebDriver | Ajax-Loader");
  
    //   const clickMeButton = $('//*[text()="CLICK ME!"]/..');
      //Wait for an element (selected by css selector) for the provided amount of milliseconds to be (dis/en)abled.
      //clickMeButton.waitForEnabled(10000, true); //will check whether the element is enabled and wait for it to turn false (Become Disabled) - will cause the test to fail
      //clickMeButton.waitForEnabled(10000, false); //will check whether the element is enabled - will pass
  
    //   //true: waits for element to become disabled- this test will fail
    //   browser.pause(8000);
    //   clickMeButton.waitForEnabled(10000, true);
    //   clickMeButton.click();
  
    //   //false: waits for element to become enabled - this test will pass
    //   browser.pause(8000);
    //   clickMeButton.waitForEnabled(10000, false);
    //   clickMeButton.click();
    //}); //test will fail
  
//    it("Test Fixed Timeout", function () {
//       //https://webdriver.io/docs/api/browser/pause.html
//       const clickByXpathSelector = $('//h1[text()="AJAX LOADER"]/..');
//      clickByXpathSelector.click();
//         browser.pause(2000);
//      var count = browser.getWindowHandles();
//      console.log(`=============== windows are ${count.length}  ================`)
    
//     browser.switchWindow("WebDriver | Ajax-Loader");
//         browser.pause(12000);
//       const clickMeButton = $("//span[@id='button1']/p[.='CLICK ME!']");
//       clickMeButton.click();
//     }); //test will pass
  });
  