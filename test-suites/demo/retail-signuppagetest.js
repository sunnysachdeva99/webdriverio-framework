const signupPage = require('../../pages/retail-signuppage')
const signupData = require('../../test-data/retail-signupdata');


describe("Sing up details", function () {

    it("Account creation", function () {
        // browser.url(`${browser.options.baseUrl}/index.php`);
        signupPage.clickOnSignin();
        signupPage.enterEmail(signupData.email);
        console.log("*************email address*********");
        console.log(signupData.email);
        console.log("*************email address*********");
        assert.equal(signupData.email, signupPage.emailaddress.getValue());
        signupPage.clickOnCreateAccount();
        browser.waitUntil(function () {
            return signupPage.title.isDisplayed() == true
        }, 5000, 'Title is not displayed even after the given time');
    });

    it("User Personal Information", function () {
        signupPage.clickOnGender();
        signupPage.enterCustFirstName(signupData.custfirstname);
        signupPage.enterCustLastName(signupData.custlastname);
        signupPage.enterPassword(signupData.password);
        assert.equal(signupData.password, signupPage.password.getValue());
    });

    it("User Address Details", function () {
        signupPage.enterAddFirstName(signupData.addfirstname);
        signupPage.enterAddLastName(signupData.addlastname);
        signupPage.enterCompany(signupData.company);
        signupPage.enterAddress(signupData.address);
        signupPage.enterCity(signupData.company);
        browser.pause(3000);
        signupPage.enterState();
        signupPage.enterPostcode(signupData.postcode);
        signupPage.enterMobile(signupData.mobile);
        signupPage.clickOnRegister();
        browser.waitUntil(function () {
            return signupPage.myaccount.isDisplayed() == true
        }, 5000, 'Sign up failed.');

        console.log("*************Registered email address*********");
        console.log(signupData.email);
        console.log("*************Registered email address*********");
    });


});