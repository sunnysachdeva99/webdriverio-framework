class HubspotSignUpPage {

    //Sign up page
    get _getSignUpLink() {
        // div[@class='signup-link']/a - Xpath
        // div.signup-link > a - CSS Selector
        return $('div.signup-link > a');
    }

    get _getFirstNameField(){
        return $("input[data-selenium='firstName']");
    }

    get _getLastNameField(){
        return $("input[data-selenium='lastName']");
    }

    get _getEmailAddressField(){
        return $("input[data-selenium='email']");
    }

    get _getNextButton(){
        return $("//button[@type='submit']");
    }

    get _getConfirmMessage(){
        return $('//h4');
    }

    //Login Page

    get _getUserNameField(){
        return $("input#username");
    }

    get _getPasswordField(){
        return $("input#password");
    }

    get _getLoginButton(){
        return $("button#loginBtn");
    }

    get _getLoginFailedHeading(){
        return $('//h5');
    }

    get _getLoginFailedErrorMsg(){
        return $("//div[@class='private-alert__body has--vertical-spacing']/*");
    }

    

    
}

module.exports = new HubspotSignUpPage();