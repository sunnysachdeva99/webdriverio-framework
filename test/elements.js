describe('interaction with web elements', function () {
    it('enter value in field', function () {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
        browser.pause(5000);

    });


    it('get text of field', function () {
        browser.url('/');
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);

    });


    it('click on a field', function () {
        browser.url('/');
        const searchIcon = $('input.nav-input');
        searchIcon.click();
    
    });
});