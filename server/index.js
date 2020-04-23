'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

var jsonParser = bodyParser.json()


var users =
  [
    { "id": "101", "name": "John", "email": "john@gmail.com" },
    { "id": "102", "name": "Harry", "email": "harry@gmail.com" }
  ];

// GET Call
app.get('/api/users', function (req, res) {
  // res.json(users);
  // res.status(200).send(users);
  res.json({ "error": false, "status": 200, "message": "Success", "usersData": users });
});


// POST Call
app.post('/api/createUser', jsonParser, function (req, res) {
  console.log('Request Payload: ', req.body);
  console.log('Payload processed and 1 record created successfully.');
  users[users.length] = req.body;
  res.json({ "error": false, "status": 201, "message": "Success", "usermsg": "Resource created successfully", "responsePayload": req.body });
});



module.exports = app;
