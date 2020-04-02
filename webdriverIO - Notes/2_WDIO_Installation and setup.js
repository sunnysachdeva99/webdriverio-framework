/* 
WebdriverIO setup and installations:

Packages to be installed:

    1.Java
    2.Node
    3.npm

Setup:

1.Verify whether the node and npm are successfully installed in your machine.
    To verify node, node -v (in cmd)
    To verify npm,  npm -v  (in cmd)

2.Initialize package.json
    Create package.json file by typing the following command:
    npm init -y

3.Install WebdriverIO 
    WebdriverIO can be install by following command:
    npm install webdriverio --save-dev

4.Install WebdriverIO CLI
    Next step would be the installation of the CLI dependency, we need to run the following command:
    npm install @wdio/cli

5.WebdriverIO Configuration
    Enter the following command in order to create WebdriverIO config file:
     ./node_modules/.bin/wdio config -y
    we have used ‘-y’ option so all default options get set up for you. And wdio.conf.js file gets created 
    under your project root folder. We will use this file to configure our project.

6.Install Chai Package
    Chai can be install by following command:
    npm install chai --save-dev

7.Install Chai-webdriverio package
    Chai-webdriverio can be install by following command:
    npm install chai-webdriverio --save-dev

8.Install local-runner package
    local-runner can be install by following command:
    npm local-runner --save-dev

Once all the dependency packages are installed , then wdio.conf.js file has to be configures as per requirement.

*/