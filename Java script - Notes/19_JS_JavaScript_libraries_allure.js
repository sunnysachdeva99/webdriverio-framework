/*

WDIO Allure Reporter:

A WebdriverIO reporter plugin to create Allure Test Reports.

Allure Framework is a flexible lightweight multi-language test report tool that not 
only shows a very concise representation of what have been tested in a neat web report 
form, but allows everyone participating in the development process to extract maximum 
of useful information from everyday execution of tests.

Installation:

The easiest way is to keep @wdio/allure-reporter as a devDependency in your package.json.

{
  "devDependencies": {
    "@wdio/allure-reporter": "^5.0.0"
  }
}
You can simple do it by:

npm install @wdio/allure-reporter --save-dev

Configure the output directory in your wdio.conf.js file:

exports.config = {
    // ...
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    // ...
}

*/

//import allureReporter from '@wdio/allure-reporter'

const allure_report = require('wdio-allure-reporter')

describe('Suite', () => {
    it('Case', () => {
        allure_report.addFeature('Feature')
    })
})