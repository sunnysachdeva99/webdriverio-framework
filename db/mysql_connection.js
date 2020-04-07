var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "mydb"
});

//Connecting to DB
con.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
});


//CRUD Operations

//Query to insert one record to table
const insertOneSql = "INSERT INTO person ( name, owner, birth) VALUES ( 'Danny', 'Bohn', '2015-02-04' )";
con.query(insertOneSql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});


//Query to insert more records to table
const insertSql = "INSERT INTO person ( name, owner, birth) VALUES \
    ( 'Abdul', 'Kalam', '1931-10-15' ),\
    ( 'Mahatma', 'Gandhi', '1869-10-02' )";
con.query(insertSql, function (err, result) {
    if (err) throw err;
    console.log("2 records inserted");
});

// Retreive the records from Table
// const retrieveSql = "SELECT * FROM person";
// con.query(retrieveSql, function (err, result, fields) {
//     if (err) throw err;
//     console.log(result.RowDataPacket);
// });


var person = {
    name: 'Sandy',
    owner: 'Lennon',
    birth: '2015-01-03'
}

//Query to insert one record to table
const insertObjSql = "INSERT INTO person set ?";
let query = con.query(insertObjSql, person, function (err, result) {
    if (err) throw err;
    console.log(query.sql);
    console.log("1 record inserted");
});


var myObjArray = [
    {
        name: 'Cookie',
        owner: 'Casey',
        birth: '2013-11-13'
    },
    {
        name: 'Charlie',
        owner: 'River',
        birth: '2016-05-21'
    },
    {
        name: 'John',
        owner: 'Keats',
        birth: '1795-10-31'
    }
];

//insertObjSql = "INSERT INTO person set ?";
for (let i = 0; i < myObjArray.length; i++) {
    let query = con.query(insertObjSql, myObjArray[i], function (err, result) {
        if (err) throw err;
        console.log(query.sql);
        console.log(i = (i == 0) ? 1 : i + 1, "record inserted");
    });
}


// Inserting but // throw err; Rethrow non-MySQL errors
// const insertObjSql = "INSERT INTO person set ?";
// myObjArray.forEach(function(element){
//     var query = con.query(insertObjSql, element, function (err, result) {
//         if (err) throw err;
//         console.log(query.sql);
//         console.log(i = (i == 0) ? 1 : i + 1, "record inserted");
//     });
// });


// Retreive the records from Table by 'Where' clause
// const retrieveSqlWhere = "SELECT * FROM person WHERE name = 'Danny'";
// con.query(retrieveSqlWhere, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });


// Retreive the records from Table by 'LIMIT'
// const retrieveSqlLimit = "SELECT * FROM person LIMIT 5";
//   con.query(retrieveSqlLimit, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });


//Update the record from table by 'Where' clause
// const updateSql = "UPDATE person SET name = 'Jock' WHERE owner = 'Samm'";
//   con.query(updateSql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });


// Delete the record from table by 'Where' clause
//   const deleteSql = "DELETE FROM person WHERE name='Danny'";
//   con.query(deleteSql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });


// Delete all records from table
// const deleteSql = "TRUNCATE TABLE person;";
// con.query(deleteSql, function (err, result) {
//   if (err) throw err;
//   console.log("Number of records deleted: " + result.affectedRows);
// });


const retrieveSql = "SELECT * FROM person";
con.query(retrieveSql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});









