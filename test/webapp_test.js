var assert = require('chai').assert
var should = require('chai').should
var expect = require('chai').should

describe('Scenario 1 : Check Title of Facebook', function(){
    it('connect to facebook', function(){
        browser.url('https://www.facebook.com')
        console.log('Browser Status : ', browser.status())
        assert.equal(browser.status().ready, true)
    })
    it('check title of the facebook', function(){
        assert.include(browser.getTitle(), 'Facebook')
    })
})

describe('Scenario 2 : Enter username and pwd', function(){
    it('connect to facebook', function(){
        browser.url('https://www.facebook.com')
        console.log('Browser Status : ', browser.status())
        assert.equal(browser.status().ready, true)
    })
    it('Enter uname and pwd', function(){
        email = $("*[id='email']").setValue('venkat@gmail.com')
        $("*[id='pass']").setValue('1232321212');
        assert.include($("*[id='email']").getValue(), 'venkat@gmail.com')
    })
})

describe('Scenario 3 : Open twitter in new window', function(){
    it('connect to twitter', function(){
        browser.newWindow('https://www.twitter.com')
        console.log('Browser Status : ', browser.status())
        assert.equal(browser.status().ready, true)
    })
    it('check title of the twitter', function(){
        assert.include(browser.getTitle(), 'Twitter')
    })
})

describe('Scenario 4 : Enter uname and pwd on twitter', function(){
    it('connect to twitter', function(){
        browser.newWindow('https://twitter.com/login')
        console.log('Browser Status : ', browser.status())
        assert.equal(browser.status().ready, true)
    })
    it('Enter uname and pwd', function(){
        email = $("*[name='session[username_or_email]']").setValue('venkat@gmail.com')
        $("*[name='session[password]']").setValue('1232321212');
        assert.include($("*[name='session[username_or_email]']").getValue(), 'venkat@gmail.com')
    })
})

