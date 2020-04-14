const fs = require('fs');

describe("Read data from JSON", function(){
    it("verify the data", function(){
        let rawdata = fs.readFileSync('D:\\WebDriver-IO\\WDWS\\webdriver-io-practice\\data\\testdata.json');
        let data = JSON.parse(rawdata);
        console.log(data);
    
    });
});