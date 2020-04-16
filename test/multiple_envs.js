const assert = require('chai').assert

describe('Environment checkup', function(){
    it('check browser URL', function(){
        
        console.log('Browser Status : ', browser.status())
        assert.equal(browser.status().ready, true)
        browser.url('/')
        browser.pause(2000)
        console.log('Current URL : ', browser.getUrl())
    })
})