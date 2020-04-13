const {MongoClient} = require("mongodb");
const uri = 'mongodb://localhost:27017';

beforeEach(function() {
  browser.setWindowSize(1800, 1200);
  browser.url("http://webdriveruniversity.com");
});

describe("Test contact us page on webdriveruni", () => {

  const client = new MongoClient(uri);
  
  async function getPerson(){
  try{
    await client.connect();
    const db = client.db('loyaltybatchservices');
    console.log('Connected to database '+db.databaseName);
    const collections = await db.collections();
    collections.forEach(c=> console.log(c.collectionName));

    const person = db.collection('person');
    const searchCurson = await person.find();
    const persons = await searchCurson.toArray();
    
console.log(`==================${persons[0].last_name}======================`)
    
    // console.table(persons);
    return persons[0];
}catch(ex){
    console.error(`something bad happend ${ex}`);
}finally{
  client.close();
}};



it("Submit all information via the contact us page", async() => {
  var details = await getPerson();
  console.log(`============${details.first_name}=============`);
  console.log(`============${details.last_name}=============`);
  await browser.waitAndClick('//h1[text()="CONTACT US"]/..');
  await browser.pause(5000);
  await browser.switchWindow('WebDriver | Contact Us');
  await browser.waitAndSendkeys('//*[@name="first_name"]', details.first_name);
  await browser.waitAndSendkeys('//*[@name="last_name"]', details.last_name);
  await browser.waitAndSendkeys('//*[@name="email"]', 'raju.gade@mail.com');
  await browser.waitAndSendkeys('//*[@name="message"]', 'Hello how are you?');

  await browser.waitAndClick('//*[@value="SUBMIT"]');
  //submitButton.click();

  const contactUsSubmissionDetails = await browser.getUrlAndTitle();
  expect(contactUsSubmissionDetails.url).to.contain('contact-form-thank-you');
}); 
  });