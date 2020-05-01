'use strict';

var request = require('supertest');
var app = require('../../server');
const retainLoginPage = require('../../pages/retail-loginpage');

var apiEmailAddress;
var apiPassword;

// before(() => {
//     browser.url('/');
//     browser.maximizeWindow();
//     browser.pause(2000);
// });


describe('verify API Calls', () => {

  it('create a user', () => {
    let requestPayload = { "id": "103", "name": "test demo", "email": "autopracticeuser-1@gmail.com","pwd": "test1234"}
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



  it('get all users', () => {
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
              { "id": "101", "name": "John", "email": "john@gmail.com","pwd": "testuser"},
              { "id": "102", "name": "Harry", "email": "harry@gmail.com","pwd": "testuser"},
              { "id": "103", "name": "test demo", "email": "autopracticeuser-1@gmail.com","pwd": "test1234"},
              // { "id": "104", "name": "Mitty", "email": "mitty@gmail.com","pwd": "testuser"}
            ];

          let actdUsers = res.body.usersData;
          // console.log('Data Valildation: ', expectedUsers, "  ==  ", actdUsers);
          // expect(expectedUsers).to.eql(actdUsers);

        
          // Send the following credentials for login the UI application
          var userDetails = actdUsers[actdUsers.length-1];
          apiEmailAddress = userDetails.email;
          apiPassword = userDetails.pwd;

        }
      });
  });
});





describe('log into account with valid data: ', () => {

  // before(async () => {
  //   browser.url('/');
  //   browser.maximizeWindow();
  //   browser.pause(2000);
  // });

  browser.pause(5000);

  it('click on Sign in Link', () => {
    retainLoginPage._signInLink.scrollIntoView();
    browser.pause(2000);
    retainLoginPage._signInLink.click();
  });

  it('enter email address', () => {
    // retainLoginPage._emailAddressField.setValue('autopracticeuser-1@gmail.com');
    console.log('EmailAddressAPI: ' + apiEmailAddress);
    console.log('PasswordAPI: ' + apiPassword);
    retainLoginPage._emailAddressField.setValue(apiEmailAddress);
    expect(retainLoginPage._emailAddressField.getValue()).equals('autopracticeuser-1@gmail.com');
  });

  it('enter password', () => {
    // retainLoginPage._passwordField.setValue('test1234');
    retainLoginPage._passwordField.setValue(apiPassword);
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


describe.skip('log into account with invalid data: ', () => {
  // before(async () => {
  //   browser.url('/');
  //   browser.maximizeWindow();
  //   browser.pause(2000);
  // });

  it('click on Sign in Link', () => {
    retainLoginPage._signInLink.click();
  });

  it('enter email address', () => {
    retainLoginPage._emailAddressField.setValue('invaliduser@gmail.com');
    expect(retainLoginPage._emailAddressField.getValue()).equals('invaliduser@gmail.com');
  });

  it('enter password', () => {
    retainLoginPage._passwordField.setValue('Automation');
    expect(retainLoginPage._passwordField.getValue()).equals('Automation');
  });

  it('click on Sign in button', () => {
    expect(retainLoginPage._signInButton.isEnabled()).equals(true);
    retainLoginPage._signInButton.click();
  });

  it('should throw Authentication failed error message', () => {
    console.log('Error Message: ', retainLoginPage._errorMessage.getText());
    expect(retainLoginPage._errorMessage.getText()).equals('Authentication failed.');
    browser.pause(5000);

  });

});


