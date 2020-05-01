class RetailLoginPage{

    get _signInLink(){
        return $('a.login');
    }

    get _emailAddressField(){
        return $('input#email');
    }

    get _passwordField(){
        return $('input#passwd');
    }

    get _signInButton(){
        return $('button#SubmitLogin');
    }

    get _errorMessage(){
        return $('div.alert-danger > ol > li');
    }

    get _authUserName(){
        return $('a.account span');
    }

    get _myAccount(){
        return $('span.navigation_page');
    }

    


}

module.exports = new RetailLoginPage();
