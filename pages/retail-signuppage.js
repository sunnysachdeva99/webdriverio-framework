class SignupPage {


    //signin area
    //=============

    get _sigininlink() {
        return $("a[class='login']")
    }
    get emailaddress() {
        return $('#email_create')
    }
    get createAccount() {
        return $('#SubmitCreate')
    }

    clickOnSignin() {
        this._sigininlink.waitForDisplayed();
        this._sigininlink.click();
    }

    enterEmail(text) {
        this.emailaddress.waitForDisplayed();
        this.emailaddress.setValue(text);
    }

    clickOnCreateAccount() {
        this.createAccount.waitForDisplayed();
        this.createAccount.click();
    }

    //Singup Elements
    //=================
    get title() {
        return $('#id_gender1')
    }

    get customerfirstname() {
        return $('#customer_firstname')
    }
    get customerlastname() {
        return $('#customer_lastname')
    }

    get password() {
        return $('#passwd')
    }

    enterCustFirstName(text) {
        this.customerfirstname.waitForDisplayed();
        this.customerfirstname.setValue(text);
    }
    enterCustLastName(text) {
        this.customerlastname.waitForDisplayed();
        this.customerlastname.setValue(text);
    }
    enterPassword(text) {
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    clickOnGender() {
        this.title.waitForDisplayed();
        this.title.click();
    }


    get addfirstname() {
        return $('#firstname')
    }
    get addlastname() {
        return $('#lastname')
    }
    get company() {
        return $('#company')
    }
    get address() {
        return $('#address1')
    }
    get city() {
        return $('#city')
    }

    get postcode() {
        return $('#postcode')
    }
    get mobile() {
        return $('#phone_mobile')
    }

    get register() {
        return $('#submitAccount')
    }
    get myaccount() {
        return $("div[class='breadcrumb clearfix']")
    }

    get _signOut() {
        return $('a.logout')
    }


    
    enterAddFirstName(text) {
        this.addfirstname.waitForDisplayed();
        this.addfirstname.setValue(text);
    }
    enterAddLastName(text) {
        this.addlastname.waitForDisplayed();
        this.addlastname.setValue(text);
    }

    enterCompany(text) {
        this.company.waitForDisplayed();
        this.company.setValue(text);
    }
    enterAddress(text) {
        this.address.waitForDisplayed();
        this.address.setValue(text);
    }
    enterCity(text) {
        this.city.waitForDisplayed();
        this.city.setValue(text);
    }
    enterState() {
        const selectBox = $('#id_state');
        selectBox.selectByAttribute('value', '2');
    }
    enterPostcode(text) {
        this.postcode.waitForDisplayed();
        this.postcode.setValue(text);
    }
    enterMobile(text) {
        this.mobile.waitForDisplayed();
        this.mobile.setValue(text);
    }

    clickOnRegister() {
        this.register.waitForDisplayed();
        this.register.click();
    }
}
module.exports = new SignupPage();