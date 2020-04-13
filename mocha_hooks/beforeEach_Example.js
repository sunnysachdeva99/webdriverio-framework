beforeEach(function () {
    browser.url('http://webdriveruniversity.com/Contact-Us/contactus.html');
    browser.pause(5000);
});

describe('Testing ContactUs page in webdriver university', function () {
    
    it('This is inside beforeEach_Example.JS', function(){

        console.log("This is inside the beforeEach_Example.JS");

    });
    // it('able to submit form successfully', function () {
    //     $("[name = 'first_name']").setValue("Raju");
    //     $("[name = 'last_name']").setValue("Gade");
    //     $("[name = 'email']").setValue("raju.gade@gmai.com");
    //     $("[name = 'message']").setValue("This is moch hooks concept");
    //     $("[type='submit']").click();
    //     browser.pause(5000);

    // });
    // it('should not able to submit form as all fields are required', function () {
    //     $("[name = 'first_name']").setValue("Raju");
    //     $("[name = 'email']").setValue("raju.gade@gmai.com");
    //     $("[name = 'message']").setValue("This is moch hooks concept");
    //     $("[type='submit']").click();
    //     browser.pause(5000);

    // });
    // it('should not able to submit form as all fields are required', function () {
    //     $("[name = 'first_name']").setValue("Raju");
    //     $("[name = 'last_name']").setValue("Gade");
    //     $("[name = 'message']").setValue("This is moch hooks concept");
    //     $("[type='submit']").click();
    //     browser.pause(5000);

    // });
    // it('should not able to submit form as all fields are required', function () {
    //     $("[name = 'first_name']").setValue("Raju");
    //     $("[name = 'last_name']").setValue("Gade");
    //     $("[name = 'email']").setValue("raju.gade@gmai.com");
    //     $("[type='submit']").click();
    //     browser.pause(5000);

    // });

});
