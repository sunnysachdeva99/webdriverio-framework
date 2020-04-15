const assert = require("assert");
 
describe("Lambdatest Demo Test", function() {
    it("Lambdatest Demo TestCase", function() {
        browser.url("https://lambdatest.github.io/sample-todo-app/");
        $("*[name='li1']").click();
        $("*[name='li2']").click();
       $("#sampletodotext").setValue("Lambdatest\n");
        
        assert.strictEqual(browser.getTitle(), "Sample page - lambdatest.com");
        

    });
});