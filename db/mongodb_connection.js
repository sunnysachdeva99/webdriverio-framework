const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.collection('cars').find({}).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});