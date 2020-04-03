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
        browser.pause(3000)
    });

});