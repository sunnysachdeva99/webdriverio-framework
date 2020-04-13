describe("Test contact us logic via webdriveruniversity", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("./");
    });

    it("Test the contact us page", () => {
        const contactUsButton = $("//h1[text()='CONTACT US']");
        contactUsButton.click();
        browser.pause(2000);
        browser.switchWindow("WebDriver | Contact Us");

        const firstNameTextField = $("[name='first_name']")
        firstNameTextField.waitForDisplayed();
        firstNameTextField.addValue('Add your text here');
        browser.pause(2000);

        firstNameTextField.clearValue();
        browser.pause(2000);

        firstNameTextField.setValue('Hello how are you?');
        browser.pause(2000);
    }); 
  });
  