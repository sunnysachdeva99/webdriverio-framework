//mocha
//https://devdocs.io/mocha/

var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should

var request = require('request')
var db_close = 'closed'

function db_cls(){
    return db_close
}
/*
beforeEach('Before All', function(){
    return db_cls()
    .then(function(){
        return db_cls()
    })
})

beforeEach(async function() {
    await db_cls()
    await db_cls()
  })

*/
    describe('Array', function(){
        describe('Homegenious', function(){
            it('Check Homegenious Array', function(){
                assert.equal(1, [1,2,3,4][0], 'Array[4] is not 1')
            })
        })
        describe('Heterogenious', function(){
            it('Check Heterogenious Array', function(){
                assert.equal(12, ['Hello', 'a', 'b', 12, 10.5][3], 'Array[3] is not 12')
            })
        })
    });

    describe('Array', function(){
        describe('Homegenious only', function(){
            //it.only('Check Homegenious Array', function(){
            it('Check Homegenious Array', function(){
                assert.equal(1, [1,2,3,4][0], 'Array[4] is not 1')
            })
            it.skip('Check Heterogenious Array only', function(){
                assert.equal(12, ['Hello', 'a', 'b', 12, 10.5][3], 'Array[3] is not 12')
            })
        })
        describe('Heterogenious', function(){
            context('Heterogenious of function', function(){
            ['Hello', 'a', 'b', 12, 10.5].forEach(function(x){
            it('Check Heterogenious ' + x +' in Array', function(){
                assert.equal(12, x, x + ' is not in Array')
            })
        })
        })
            it('Check Heterogenious Array  else skipped', function(){
                if(db_close=='close'){
                    console.log('db closed')
                }
                else{
                    this.skip()
                }
            })
        })
    });

    describe('Check Sample URL', function(){
        describe('Check Google', function(){
            it('Request google.com', function(){
            request('http://www.google.com', function(error, response, body){
                    assert.equal(response.statusCode, 200, 'response is not 200')
                    expect(response.statusCode).to.be(200, 'response is not 200')
                    response.statusCode.should.be('200', 'response is not 200')
                })
            })
        })
    });

describe('check Done', function(){
    it('call done multiple times', function(done){
        setImmediate(done);
        //setImmediate(done);
    })
})