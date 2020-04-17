var request = require('sync-request');
beforeEach('',()=>{
    
})
describe("Testing an API", () => {

    it("test GET method", () => {
    var res = request('GET', 'https://reqres.in/api/users/2');
    var response = JSON.parse(res.getBody().toString('utf8'));
    console.log("======================");
    console.log(res.statusCode);
    console.log(response.data.email)
    console.log("======================");
        
    }); 

    
    it("test POST method", () => {
        var res = request('POST', 'https://reqres.in/api/users',{ 
            headers: {
                'content-type': 'application/json',
              },           
           json: {
                "name": "Raju",
                "job": "Gade"
            }           
        });
        var response = JSON.parse(res.getBody().toString('utf8'));
        console.log("======================");
        console.log(res.statusCode);
        console.log(response);
        console.log("======================");
            
        }); 
  });