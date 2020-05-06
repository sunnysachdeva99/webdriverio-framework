/**
 * End To End Test Flow
 * =====================
 * Sign Up
 * Login in account
 * Add to Cart
 * Checkout process
 * Visual Comparison
 */

'use strict';

var request = require('supertest');
var app = require('../../server');
const allureReporter = require('@wdio/allure-reporter').default

const homepage = require('../../pages/retail-homepage')
const signupPage = require('../../pages/retail-signuppage')
const signupData = require('../../test-data/retail-signupdata');
const retainLoginPage = require('../../pages/retail-loginpage');
const pdppage = require('../../pages/retail-pdppage')
const summaryPage = require("../../pages/retail-summarypage");
const addressPage = require("../../pages/retail-addresspage");
const shippingPage = require("../../pages/retail-shippingpage");
const paymentPage = require("../../pages/retail-paymentpage");


var apiEmailAddress;
var apiPassword;


// Sign Up Flow
describe("Sign up details", function () {

  it("Account creation", function () {
    browser.takeScreenshot();
    signupPage.clickOnSignin();
    // allureReporter.addAttachment('SignUpLink', signupPage._sigininlink.toString());
    // allureReporter.addAttachment({ name: 'SignUpLink', content: signupPage._sigininlink.toString(), type: 'screenshot' })
    signupPage.enterEmail(signupData.email);
    // console.log(signupData.email);
    assert.equal(signupData.email, signupPage.emailaddress.getValue());
    signupPage.clickOnCreateAccount();
    browser.waitUntil(function () {
      return signupPage.title.isDisplayed() == true
    }, 5000, 'Title is not displayed even after the given time');
  });

  it("User Personal Information", function () {
    browser.takeScreenshot();
    // signupPage.clickOnGender();
    signupPage.enterCustFirstName(signupData.custfirstname);
    signupPage.enterCustLastName(signupData.custlastname);
    signupPage.enterPassword(signupData.password);
    assert.equal(signupData.password, signupPage.password.getValue());
  });

  it("User Address Details", function () {
    browser.takeScreenshot();
    signupPage.enterAddFirstName(signupData.addfirstname);
    signupPage.enterAddLastName(signupData.addlastname);
    signupPage.enterCompany(signupData.company);
    signupPage.enterAddress(signupData.address);
    signupPage.enterCity(signupData.company);
    browser.pause(3000);
    signupPage.enterState();
    signupPage.enterPostcode(signupData.postcode);
    signupPage.enterMobile(signupData.mobile);
    signupPage.clickOnRegister();
    browser.waitUntil(function () {
      return signupPage.myaccount.isDisplayed() == true
    }, 5000, 'Sign up failed.');

    // console.log(signupData.email);
    signupPage._signOut.click();
    browser.waitUntil(function () {
      return signupPage._sigininlink.isDisplayed() == true
    }, 2000, 'Sign in link not displayed.');
  });

});



// Sign in Flow
describe.skip('verify API Calls', () => {

  it('create a user', () => {
    let requestPayload = { "id": "103", "name": "test demo", "email": "autopracticeuser-1@gmail.com", "pwd": "test1234" }
    // request(app)
    request('http://localhost:3000') // need to start the server 
      .post('/api/createuser')
      .send(requestPayload)
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function (err, res) {

        expect(res.body.status).equal(201);
        console.log('======== POST Call Reponse Details ======');
        console.log(res.body.status, "," + res.body.usermsg);
        let resource = res.body.responsePayload;
        console.log('Resource Details: ', resource);
      });
  });


  it('get user data ', () => {
    // request(app)
    request('http://localhost:3000') // need to start the server 
      .get('/api/users')
      .expect('Content-Type', /json/)
      // .expect(200)
      .end(function (err, res) {
        if (err) {
          console.log('Check the URL');
        } else {
          console.log('======== GET Call Reponse Details ======');
          console.log("Status Code: ", res.status);
          console.log("Messae: ", res.body.message);
          expect(res.status).equal(200);
          expect(res.body.message).equal('Success');
          let expectedUsers =
            [
              { "id": "101", "name": "John", "email": "john@gmail.com", "pwd": "testuser" },
              { "id": "102", "name": "Harry", "email": "harry@gmail.com", "pwd": "testuser" },
              { "id": "103", "name": "test demo", "email": "autopracticeuser-1@gmail.com", "pwd": "test1234" },
              // { "id": "104", "name": "Mitty", "email": "mitty@gmail.com","pwd": "testuser"}
            ];
          let actdUsers = res.body.usersData;
          // console.log('Data Valildation: ', expectedUsers, "  ==  ", actdUsers);
          // expect(expectedUsers).to.eql(actdUsers);

          // Send the following credentials for login the UI application
          var userDetails = actdUsers[actdUsers.length - 1];
          apiEmailAddress = userDetails.email;
          apiPassword = userDetails.pwd;
        }
      });
  });
});

describe('Log into account', () => {

  it('click on Sign in Link', () => {
    retainLoginPage._signInLink.click();
  });

  it('enter email address', () => {
    // console.log('EmailAddressAPI: ' + apiEmailAddress);
    // console.log('PasswordAPI: ' + apiPassword);
    retainLoginPage._emailAddressField.setValue('autopracticeuser-1@gmail.com');
    expect(retainLoginPage._emailAddressField.getValue()).equals('autopracticeuser-1@gmail.com');
  });

  it('enter password', () => {
    retainLoginPage._passwordField.setValue('test1234');
    expect(retainLoginPage._passwordField.getValue()).equals('test1234');
  });

  it('click on Sign in button', () => {
    expect(retainLoginPage._signInButton.isEnabled()).equals(true);
    retainLoginPage._signInButton.click();
    browser.pause(3000);
  });

  it('user should sign in successfully', () => {
    retainLoginPage._authUserName.waitForDisplayed({ timeout: 3000 });

    console.log('UserName: ', retainLoginPage._authUserName.getText());
    expect(retainLoginPage._authUserName.getText()).equals('test demo');

    console.log('Dispalyed: ', retainLoginPage._myAccount.isDisplayed());
    expect(retainLoginPage._myAccount.isDisplayed()).equals(true);
    browser.pause(5000);
  });
  
});



// Add to Cart Flow

describe('Add Products to cart', function () {
  let price, size, color, name, success, dress, qnt, cart_price, color_size, quantity, stock;

  it('Browse - add prodcut to cart', function () {
    homepage.moveToCategoryPage();
    homepage.get_summer_dresses();
    homepage.add_item_by_browse();
    browser.pause(10000);

    // pdppage.add_to_cart();
    homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
    homepage.cont_shop();
    homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
    browser.pause(2000);
  })

  // it('Search - add prodcut to cart', function () {

  //   homepage.search_with('summer dresses')
  //   stock = homepage.check_stock();
  //   expect(stock).to.equal('In stock');
  //   browser.pause(1000);

  //   homepage.add_item_by_search();
  //   homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
  //   price = pdppage.get_price_pdp();
  //   pdppage.inc_quantity();
  //   pdppage.inc_quantity();
  //   pdppage.inc_quantity();
  //   quantity = pdppage.get_quantity_pdp();
  //   size = 'M';
  //   pdppage.get_size_pdp(size);
  //   color = pdppage.add_color();
  //   name = pdppage.get_dress_name_pdp();
  //   pdppage.add_to_cart();
  //   homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
  //   success = pdppage.get_success();
  //   dress = pdppage.get_dress_name_cart();
  //   color_size = pdppage.get_color_size_cart();
  //   qnt = pdppage.get_quantity_cart();
  //   expect(qnt).to.equal(quantity);
  //   cart_price = pdppage.get_price_cart();
  //   price = parseFloat(price.match(/\d+/g).map(Number).join('.')) * parseInt(quantity);
  //   expect(success).to.equal('Product successfully added to your shopping cart');
  //   expect(cart_price).to.equal('$' + price.toString());
  //   expect(dress).to.equal(name);
  //   expect(color_size).to.include(color);
  //   expect(color_size).to.include(size);
  //   homepage.cont_shop();
  //   browser.pause(2000);
  // })

  it('Browse From Left Nav - add prodcut to cart ', function () {
    homepage.get_dresses();
    homepage.check_catalog();
    homepage.check_size();
    homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter')
    homepage.add_item_by_feature();
    homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
    price = pdppage.get_price_pdp();
    pdppage.inc_quantity();
    pdppage.inc_quantity();
    pdppage.inc_quantity();
    pdppage.dec_quantity();
    quantity = pdppage.get_quantity_pdp();
    size = pdppage.get_size_pdp3();
    color = pdppage.add_color3();
    name = pdppage.get_dress_name_pdp();
    pdppage.add_to_cart();
    homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
    success = pdppage.get_success();
    dress = pdppage.get_dress_name_cart();
    color_size = pdppage.get_color_size_cart();
    expect(color_size).to.include(size || $('select#group_1').getText()[0]);
    qnt = pdppage.get_quantity_cart();
    cart_price = pdppage.get_price_cart();
    price = parseFloat(price.match(/\d+/g).map(Number).join('.')) * parseInt(quantity);
    expect(success).to.equal('Product successfully added to your shopping cart');
    expect(dress).to.equal(name);
    expect(color_size).to.include(color);
    expect(qnt).to.equal(quantity);
    expect(cart_price).to.equal('$' + price.toString()+'.00');
    homepage.cont_shop();
    browser.pause(5000);
  })
  
})


// Checkout Process
describe("Checkout Process", function () {
  let count, getShippingPrice, getTaxPrice, getTotalCartPrice, totalCartPrice;

  it("Summary - Address - Shipping - Payment Checkout Process.", function () {
    summaryPage.clickCartButton();
    // assert.equal(true, summaryPage.isCartItemsPresent(), 'Items are not avaiable in cart');
    expect(true).to.equal(summaryPage.isCartItemsPresent(), 'Items are not avaiable in cart');

    count = summaryPage.getTotalItemsCount().length;

    var itemPrice = new Array();
    for (let index = 1; index <= count; index++) {
      let arrayIndex = index - 1;
      let inStock = summaryPage.getInStockText(index);
      let unitPrice = summaryPage.getUnitPrice(index);
      let quantity = summaryPage.getQuantity(index);
      itemPrice[arrayIndex] = summaryPage.getTotalPriceForProduct(index);
      let totalSinleProductPrice = unitPrice * quantity;
      // assert.equal('In stock', inStock, `In stock is not available for ${index} row...`);
      expect('In stock').to.equal(inStock, `In stock is not available for ${index} row...`);
      // assert.equal(itemPrice[arrayIndex], totalSinleProductPrice, `Single Item Total Price is wrong at ${index} position ...`);
      expect(parseFloat(itemPrice[arrayIndex])).to.equal(totalSinleProductPrice, `Single Item Total Price is wrong at ${index} position`);
    }
    console.log('individual Item prices--', itemPrice);
    const sumAmount = itemPrice.reduce(add, 0); // with initial value to avoid when the array is empty
    function add(accumulator, a) { return accumulator + (+ parseFloat(a).toFixed(2)); }

    getShippingPrice = summaryPage.getShippingPrice();
    getTaxPrice = summaryPage.getTaxPrice();
    getTotalCartPrice = summaryPage.getTotalCartPrice();
    totalCartPrice = (+ parseFloat(sumAmount).toFixed(2)) + (+ parseFloat(getShippingPrice).toFixed(2)) + (+ parseFloat(getTaxPrice).toFixed(2));
    // assert.equal(getTotalCartPrice, totalCartPrice, 'Total Cart Price is wrong....');
    expect(parseFloat(getTotalCartPrice)).to.equal(totalCartPrice, 'Total Cart Price is wrong');

    summaryPage.clickProceedToCheckout();
    // assert.equal(true, addressPage.isAddressDeliveryPresent(), 'Delivery address is not present  in address Page');
    expect(true).to.equal(addressPage.isAddressDeliveryPresent(), 'Delivery address is not present in address Page');
    // assert.equal(true, addressPage.isBillingAddressPresent(), 'Billing address is not present in address Page');
    expect(true).to.equal(addressPage.isBillingAddressPresent(), 'Billing address is not present in address Page');

    addressPage.clickProceedToCheckout();
    // assert.equal(true, shippingPage.isShippingCarrierPresent(), 'Shipping Details Not Available.');
    expect(true).to.equal(shippingPage.isShippingCarrierPresent(), 'Shipping Details Not Available');

    shippingPage.clickTermsOfServices();
    shippingPage.clickProceedToCheckout();
    // assert.equal(totalCartPrice, paymentPage.getTotalCartPrice(), 'Payment Cart Total Price Is Wrong.');
    expect(totalCartPrice).to.equal(parseFloat(paymentPage.getTotalCartPrice()), 'Payment Cart Total Price Is Wrong');

    // assert.equal(true, paymentPage.isBankWirePaymentPresent(), 'Bankwire payment option is not present in payment Page');
    expect(true).to.equal(paymentPage.isBankWirePaymentPresent(), 'Bankwire payment option is not present in payment Page');
    paymentPage.clickBankWirePayment();
    // assert.equal('You have chosen to pay by bank wire. Here is a short summary of your order:', paymentPage.getPaymentTypeMessage(), 'Payment type message is not present')
    expect('You have chosen to pay by bank wire. Here is a short summary of your order:').to.equal(paymentPage.getPaymentTypeMessage(), 'Payment type message is not present');    
    paymentPage.clickConfirmMyOrder();
    // assert.equal('Your order on My Store is complete.', paymentPage.getConfirmationMessage(), 'Confrimation message is not present')
    expect('Your order on My Store is complete.').to.equal(paymentPage.getConfirmationMessage(), 'Confrimation message is not present');
    // expect('You have chosen to pay by bank wire. Here is a short summary of your order:').to.equal(paymentPage.getConfirmationMessage(), 'Confrimation message is not present');


   
  })

})

// Visual Camprison
describe.skip('Visual Validation', () => {
  it('Save Elements', () => {

    homepage.moveToCategoryPage();

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
 
});


describe.skip('Visual Comaprison For Different Elements', () => {
  it('Save Elements', () => {

    homepage.moveToCategoryPage();
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
    expect(browser.checkElement(homepage.getSocialBlock(), 'getSocialBlock',{
      resizeDimensions : { top: 150, right: 170, bottom: 140, left: 50}
      })).equal(0);
  });
 
});
