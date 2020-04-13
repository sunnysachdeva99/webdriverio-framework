describe('Test the button is clickable once the ajax loader completes loading', ()=>{

it.skip('Attemp to click the button asap', ()=>{

    browser.url('http://webdriveruniversity.com/Ajax-Loader/index.html');
    $('#button1').click();

});
it.only('Attemp to click the button after 7 seconds', function(){
    browser.url('http://webdriveruniversity.com/Ajax-Loader/index.html');
    browser.pause(7000);
    $('#button1').click();
    browser.pause(7000);
});

});