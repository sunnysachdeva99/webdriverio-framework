'use strict';

var request = require('supertest');
var app = require('../server');


describe('verify API Calls', () => {

  it('create a user', () => {
    let requestPayload = { "id": "103", "name": "Kitty", "email": "kitty@gmail.com" };
    // request(app)
    request('http://localhost:3000') // need to start the server 
      .post('/api/createuser')
      .send(requestPayload)
      .set('Content-Type', 'application/json')
      .expect(200)
      .end(function (err, res) {

        expect(res.body.status).equal(201);
        console.log('======== POST Call Reponse Details ======');
        console.log(res.body.status, res.body.usermsg);
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
              { "id": "101", "name": "John", "email": "john@gmail.com" },
              { "id": "102", "name": "Harry", "email": "harry@gmail.com" },
              { "id": "103", "name": "Kitty", "email": "kitty@gmail.com" },
              // { "id": "104", "name": "Mitty", "email": "mitty@gmail.com" }
            ];

          let actdUsers = res.body.usersData;
          console.log('Data Valildation: ', expectedUsers, "  ==  ", actdUsers);
          expect(expectedUsers).to.eql(actdUsers);

        }
      });
  });

});




