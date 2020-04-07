const alr = require('wdio-allure-reporter')

describe('Suite', () => {
    it('Case', () => {
        alr.reporter.feature('Feature')
    })
})
