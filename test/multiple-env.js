/*

Handle Multiple Environments like [dev, qa, stage, prod]

To run the test suite in different environments so we need to configure the environments in our script.

Steps:
1. create a all env urls JS file
2. import that file into 'wdio.config.js' file
3. specify the process env, put the condition and baseURL in 'wdio.config.js' file
4. use the command 'ENV=qa | dev | stage | prod' to execute the test cases on various environment
5. command: ENV=qa npm test -- --spec ./test/multiple-env.js
*/

describe('handle elements', function () {
    it('verify ENV URL', function () {
        browser.url('/');
        console.log('Env URL: ' + browser.getUrl());
        expect(browser.getUrl()).equals(`${browser.options.baseUrl}/home-beta`);
    });
});