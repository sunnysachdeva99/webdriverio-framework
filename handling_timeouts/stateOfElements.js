//https://webdriver.io/docs/api/element/isExisting.html
//https://webdriver.io/docs/api/element/isSelected.html
//https://webdriver.io/docs/api/element/isDisplayed.html
describe("isExisting, isSelected and isDisplayed Commands", () => {
    beforeEach(function() {
      browser.setWindowSize(1800, 1200);
      browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });

    it("Validate state of checkbox", () => {
        const checkbox = $("//div[@id='checkboxes']//input[@value='option-1']");
        expect(checkbox.isExisting()).to.be.true;
        expect(checkbox.isSelected()).to.be.false;
        expect(checkbox.isDisplayed()).to.be.true;

        console.log("Is existing: " + checkbox.isExisting());
        console.log("Is selected: " + checkbox.isSelected());
        console.log("Is displayed: " + checkbox.isDisplayed());
        browser.pause(5000);
    }); 
  });