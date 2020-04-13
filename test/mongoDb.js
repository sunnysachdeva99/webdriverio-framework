//Creating MongoClient class both the below statements are same.
// const MongoClient = require("mongodb").MongoClient
const {MongoClient} = require("mongodb")

const uri = 'mongodb://localhost:27017';
connect();
async function connect(){
    const client = new MongoClient(uri);
    try{
        await client.connect();
       const db = client.db('loyaltybatchservices');
       console.log('Connected to database '+db.databaseName);
       const collections = await db.collections();
       collections.forEach(c=> console.log(c.collectionName));

       const person = db.collection('person');
       const searchCurson = await person.find();
       const persons = await searchCurson.toArray();
       console.table(person)
       

    }catch(ex){
        console.error('something bad happend ${ex}');
    }finally{
        client.close();
    }
}
