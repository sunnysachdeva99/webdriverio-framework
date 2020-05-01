//npx wdio wdio.conf.js --spec ./test/visualvalidation_homepage.js

const homepage = require('../../pages/retail-homepage');

// var expect = require('chai').expect

// before(() => {
//   // console.log('===================OPENING HOMEPAGE FOR VISUAL VALIDATION=======================');
//    browser.url('/');
//    browser.maximizeWindow();
//    browser.pause(3000);
// });


describe('Visual Comaprison', () => {

  // beforeEach(() => {
  //    browser.url('/');
  //    browser.pause(3000);
  // });


  it('Save Elements', () => {

    // Save logo
    // browser.saveElement(homepage.getLogo(), 'logo');

    // Save signin button
    //  browser.saveElement(homepage.getSigninbutton(), 'signinbutton');

    // scroll to bestseller
    homepage.getBestseller().scrollIntoView();

    // Save bestseller
    browser.saveElement(homepage.getBestseller(), 'getBestseller');

    // scroll to menscoat
    homepage.getMensCoats().scrollIntoView();

    // Save menscoat
    browser.saveElement(homepage.getMensCoats(), 'getMensCoats');

    // scroll to socialblock
    homepage.getSocialBlock().scrollIntoView();

    // Save socialblock
    browser.saveElement(homepage.getSocialBlock(), 'getSocialBlock');
  });

  it('Compare Elements', () => {

    // Check logo
    // console.log('===================VALIDATING LOGO FROM HOMEPAGE============================');
    // expect(browser.checkElement(homepage.getLogo(), 'logo')).equal(0);  

    // Check signinbutton
    // console.log('===================VALIDATING SIGNIN FROM HOMEPAGE============================');
    // expect(browser.checkElement(homepage.getSigninbutton(), 'signinbutton')).equal(0);

    // scroll to bestseller
    homepage.getBestseller().scrollIntoView();

    // Check bestseller
    expect(browser.checkElement(homepage.getBestseller(), 'getBestseller')).equal(0);

    // scroll to menscoat
    homepage.getMensCoats().scrollIntoView();

    // Check menscoat
    expect(browser.checkElement(homepage.getMensCoats(), 'getMensCoats')).equal(0);

    // scroll to socialblock
    homepage.getSocialBlock().scrollIntoView();

    // Check socialblock
    expect(browser.checkElement(homepage.getSocialBlock(), 'getSocialBlock')).equal(0);



  });

  it.skip('Save screen', () => {
    // Save a full page screens
    browser.saveFullPageScreen('fullPage', { /* some options*/ });
  });


  it.skip('Compare screen', () => {

    // Check a full page screens
    //  console.log('===================VALIDATING FULL PAGE FROM HOMEPAGE==========================');

    expect(browser.checkFullPageScreen('fullPage', { /* some options*/ })).equal(0);
  });
});