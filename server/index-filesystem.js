'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var fs = require("fs");
var app = express();

var jsonParser = bodyParser.json()


var users =
  [
    { "id": "101", "name": "John", "email": "john@gmail.com", "pwd": "testuser"},
    { "id": "102", "name": "Harry", "email": "harry@gmail.com", "pwd": "testuser"}
  ];

// GET Call
// app.get('/api/users', function (req, res) {
//   // res.json(users);
//   // res.status(200).send(users);
  
  
//   // fs.readFile( './test-data/users.json', 'utf8', function (err, data) {
//   //   console.log( data );
//   res.json({ "error": false, "status": 200, "message": "Success", "usersData": users });
// });


// POST Call
// app.post('/api/createUser', jsonParser, function (req, res) {
//   console.log('Request Payload: ', req.body);
//   console.log('Payload processed and 1 record created successfully.');
//   users[users.length] = req.body;
//   res.json({ "error": false, "status": 201, "message": "Success", "usermsg": "Resource created successfully", "responsePayload": req.body });
// });



app.get('/api/users', function (req, res) {
  fs.readFile( './test-data/users.json', 'utf8', function (err, data) {
    //  console.log( data );
    //  res.end( data );
    //  JSON.parse( data );
     res.json({ "error": false, "status": 200, "message": "Success", "usersData": JSON.parse( data ) });
  });
})

app.post('/api/createUser', jsonParser, function (req, res) {
  // First read existing users.
  console.log('Request Payload: ', req.body);
  
  fs.readFile( './test-data/users.json', 'utf8', function (err, data) {
     data = JSON.parse( data );
     data["user3"] = req.body["user3"];
     console.log( data );
    //  res.end( JSON.stringify(data));
  });

fs.writeFile("./test-data/users.json", jsonContent, 'utf8', function (err) {
  if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
  }
  res.json({ "error": false, "status": 201, "message": "Success", "usermsg": "Resource created successfully", "responsePayload": req.body });
  console.log("JSON file has been saved.");
});



})

module.exports = app;
