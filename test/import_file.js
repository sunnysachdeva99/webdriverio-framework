const d3 = require('d3')
const fs = require('fs')
const fetch = require('node-fetch')

fs.readFile(String.raw`C:\Users\venkata.putluri\Desktop\sample.txt`, 'utf-8', function(err, data) {
    if(err) throw err;
    console.log(data)   
})
/*
d3.csv(String.raw`C:\Users\venkata.putluri\Downloads\SampleData.xlsx`).then(
    function(data){
        console.log(data)
    })
*/
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
console.log('JSON Data : ', obj.name)
obj.birth = new Date(obj.birth);
console.log('Obj Birth :', obj)
console.log('JSON Stringify :', JSON.stringify(obj))
