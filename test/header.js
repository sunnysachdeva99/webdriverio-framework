describe('interaction with web elements', function () {
    it('get header value', function () {
        browser.url('https://www.freshworks.com/');
        const header = $('h1');
        let headerTxt = header.getText();
        console.log(headerTxt);

    });


});