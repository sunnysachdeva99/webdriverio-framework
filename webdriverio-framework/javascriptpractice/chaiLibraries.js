var expect = require('chai').expect

// describe("String Assertions of Chai", function(){
//     it("different type of String assertions", function(){
//     expect('abc').to.be.a('string');
//     console.log('1-its a string');

//     expect('abc').not.to.be.a('number');
//     console.log('2-its a string');

//     expect('abcd').which.is.a('string');  
//     console.log('3- its a string');
//     })
// })

describe("Number Assertions of chai",function(){
    it("different type of number assertions",function(){
    expect(123).to.be.a('number');
    console.log('1-its a Number');

    expect(234).not.to.be.a('string');
    console.log('2- its not a string');


    //we should not use which.is.a('number') for integers 
    expect(456).which.is.not.a('string');
    console.log('3-its a number');

    expect(472).which.is.not.a('string').to.be.true;
    console.log('4-Its a number');
    })
})


// describe("Object Assertions of chai",function(){
//     it("different type of object assertions",function(){
      
//     var details= {name:"Rama", age: 32};
    
//     expect(details).which.is.an('object');

//     console.log('1-its a Object');

//     expect(details).not.to.be.a('string');
//     console.log('2- its a object');

//     expect(details).which.is.an('object').but.has.a.property('age');
//     console.log('3-its a object');

//     expect(details).which.is.an('object').but.has.a.property('name');
//     console.log('4- its a object');

//     expect(details).which.is.an('object').but.has.a.property('age').which.is.a('number');
//     console.log('5-its a object');

//     expect(details).which.is.an('object').but.has.a.property('name').which.is.a('string');
//     console.log('6-its a object');

//     })
// })

// describe("Boolean Assertions of chai",function(){
//     it("different type of boolean assertions",function(){
//     expect(true).to.be.a('boolean');
//     console.log('1-its a boolean');

//     expect(false).not.to.be.a('string');
//     console.log('2- its boolean');


//     })
// })

describe("data Type of assertions",function(){
    var details= {name:"Rama", age: 32};
    it("data types---",function(){
        expect(typeof(details)=='object').to.be.true;
        console.log('1--its a object');

        expect(typeof(employee)=='function').to.be.true;
        console.log('1--its a object');

    })

    function employee(){

    }
})