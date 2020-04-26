# webdriverio-framework
webdriverio based automation framework

Selenium Grid: Challenge
    Working fine:
        if no geckodriver installed in node_modules.
        All the dependencies are low then updated versions.

    Not working fine:
        if geckodriver installed in node_modules.
        All the dependencies are updated versions.

Challenge to be looked into.


In local, chrome and firefox:
1. ENV=sit npm run test

Selenium-Grid (chrome and firefox): - node will capture the respective browsers logs
1. sh start-hub.sh  - to up the Hub server
2. sh firefox-node.sh - to up the firefox node
3. sh chrome-node.sh - to up the chrome server
4. ENV=sit npm run test - execute the test

Supertest:
1. npm start - to up the server
2. ENV=sit npm run test - execute the test
3. http://localhost:3000/api/users - to see the results

