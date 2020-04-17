const {MongoClient} = require("mongodb")

const host = 'mongodb://localhost:27017';
async function connect(){
    const client = new MongoClient(host);
    try{
        await client.connect();
       const db = client.db('sample');
       console.log('Using to database '+db.databaseName);
       var collections = await db.collections();
       collections.forEach(c=> console.log(c.collectionName));
       var customers = db.collection('customers');
       console.log('Customers from colection : ',customers)
       var searchCurson = await customers.find();
       console.log('Customers from query: ',customers)
       var customers = await searchCurson.toArray();
       console.log('Customers to Array : ',customers)
    }catch(ex){
        console.error('something bad happend ${ex}');
    }finally{
        client.close();
    }
}
connect();