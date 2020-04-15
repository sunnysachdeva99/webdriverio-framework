 //Node Assertion Library
var nodeAssert = require('assert')

describe("interaction with web elements", function(){

    it("enter the values into text fields", function(){

        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Mac Book');
        browser.pause(5000);

        const lable = $('span.a-size-base.a-color-base');
        console.log(lable.getText());
        
    });

    it("click on a field", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Mac Book');
        const searchBtn = $('input.nav-input');
        searchBtn.click();
        browser.pause(5000);

    });

    it("click on a Todays Deals", function(){

        browser.url('/')
        const dealbtn =$(".nav-a=Today's Deals");
        dealbtn.click();
        const text = $('div.fst-h1-st.pageBanner>h1>b');
        
        //Node Assertion
        // nodeAssert.equal(text.getText(), "Deals and Promotions");

        //Chai Assertion
        assert.equal(text.getText(), "Deals and Promotions");
        expect("Deals and Promotions").to.equal(text.getText());
        text.getText().should.equal("Deals and Promotions")

        //To check whether the element is visible OR not
        expect(text.isDisplayed()).to.equal(true);
        
        //To display customised error messages on failure of assertion
        expect(text.isDisplayed(),'expected element is not displayed').to.equal(true);

        //Not Equal
        expect("and Promotions").to.not.equal(text.getText());

        // Array include/contains
        expect([1,2,5]).to.include(5);
        browser.pause(3000)
    });

});