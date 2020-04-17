const {MongoClient} = require("mongodb");
const host = 'mongodb://localhost:27017';


async function getDetails(query){
  try{
    const client = await new MongoClient(host);
    await client.connect();
   const db = client.db('sample');
   console.log('Using to database '+db.databaseName);
   var collections = await db.collections();
   collections.forEach(c=> console.log(c.collectionName));
   var customers = db.collection('customers');
   console.log('Customers from colection : ',customers)
   var searchCurson = await customers.find(query);
   console.log('Customers from query: ',customers)
   var customers = await searchCurson.toArray();
   console.log('Customers to Array : ',customers)
   client.close();
   return customers
}catch(ex){
    console.error('something bad happend ${ex}');
}
};


describe("Test mongodb", () => {

it("Enter customer details on page", async() => {
  var details = await getDetails({'OrderDate': '4-18-19'});
  console.log(`============${details.Region}=============`);
  console.log(`============${details.Rep}=============`);
  browser.url('http://www.facebook.com')
  browser.pause(3000);
  new Promise(function(resolve, reject) {
    var elem = $('input[id="u_0_m"]')
    elem.setValue(details[0].Region);
  }).then(function(fulfilled){
    var elem = $('input[@id="u_0_o"]')
    elem.setValue(details[0].Rep);
  }).then(function(fulfilled){
    var elem = $('input[@id="u_0_r"]')
    elem.setValue(details[0].Items);
  }).then(function(fulfilled){
    var elem = $('input[@id="u_0_w"]')
    elem.setValue(details[0].Units);
  }).catch(function(error) {
    console.log(error.message)
})
  browser.pause(5000)
});
});