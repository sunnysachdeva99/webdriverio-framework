/*
 External Test Data 
 */

const hubspotSignUpPage = require('../pages/hubspot-signuppage');
const registerData = require('../test-data/hubspot-signup-data');
const loginData = require('../test-data/hubspot-login-data');

before(() => {
    browser.url('/');
    browser.pause(6000);
});


describe('log into account : ', () => {

    it('enter username', () => {
        let email = loginData.email;
        hubspotSignUpPage._getUserNameField.setValue(email);
        expect(hubspotSignUpPage._getUserNameField.getValue()).equals(email);
    });

    it('enter password', () => {
        let password = loginData.password;
        hubspotSignUpPage._getPasswordField.setValue(password);
        expect(hubspotSignUpPage._getPasswordField.getValue()).equals(password);
        //browser.debug();
    });

    it('click on Log in button', () => {

        expect(hubspotSignUpPage._getLoginButton.isEnabled()).equals(true);
        hubspotSignUpPage._getLoginButton.click();
    });

    it('verify error message', () => {
        browser.pause(2000);

        // verify login failed error message
        hubspotSignUpPage._getLoginFailedHeading.waitForDisplayed();
        expect(hubspotSignUpPage._getLoginFailedHeading.getText()).equals("That email address doesn't exist.");

        let errorMsg = "The email address you've entered doesn't appear to exist. Please check your entry and try again.";
        hubspotSignUpPage._getLoginFailedErrorMsg.waitForDisplayed();
        expect(hubspotSignUpPage._getLoginFailedErrorMsg.getText()).equals(errorMsg);
    });
});

describe.skip('register an account : ', () => {
    var firstName = '';
    it('enter firstname', () => {
        hubspotSignUpPage._getSignUpLink.click();
        // browser.pause(2000);
        firstName = registerData.firstName;
        hubspotSignUpPage._getFirstNameField.setValue(firstName);
        expect(hubspotSignUpPage._getFirstNameField.getValue()).equals(firstName);
    });

    it('enter lastname', () => {
        let lastName = registerData.lastName;
        hubspotSignUpPage._getLastNameField.setValue(lastName);
        expect(hubspotSignUpPage._getLastNameField.getValue()).equals(lastName);
    });

    it('enter email address', () => {
        let email = registerData.email;
        hubspotSignUpPage._getEmailAddressField.setValue(email);
        expect(hubspotSignUpPage._getEmailAddressField.getValue()).equals(email);
    });

    it('click on Next button', () => {
        expect(hubspotSignUpPage._getNextButton.isEnabled()).equals(true);
        browser.pause(2000);
        hubspotSignUpPage._getNextButton.click();
    });

    it('verify confirmation message', () => {
        let expConfirmMsg = 'Hi ' + firstName + ', please confirm your email';
        browser.pause(3000);

        // verify new URL after click on Next button
        expect(browser.getUrl().includes('check-your-email')).equals(true);

        // verify the confirmation message
        hubspotSignUpPage._getConfirmMessage.waitForDisplayed();
        expect(hubspotSignUpPage._getConfirmMessage.getText()).equals(expConfirmMsg);

    });
});







