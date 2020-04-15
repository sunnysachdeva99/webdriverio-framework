var assert = require('chai').assert

describe('Array', function(){
    it('Check array', function(){
        assert.equal(1, [1,2,3,4].indexOf(4), 'index of 4 is not 1')
    })
})