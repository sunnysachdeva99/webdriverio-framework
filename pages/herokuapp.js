class HerokuappPage {


    getHeaderTxt() {
        // return $('div.example > h3'); // css selector

        let headerTxt = $('h3');
        headerTxt.waitForDisplayed();
        return headerTxt.getText();
    }

    getLinkElement(index) {
        // $(`//div[@id='content']/ul/li[6]`)
        return $(`div#content > ul > li:nth-of-type(${index}) > a`)
        // return $(`div#content > ul > li:nth-child(${index}) > a`)
        // div#content > ul > li:nth-child(6) a             
        // ul > li:nth-child(6) > a
        // return $(`ul > li:nth-child(${index}) > a`)
        // div#content > ul > li:nth-child(6) > a
    }

    clickOnLinkElement(index) {
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }

    getCheckBoxElement(index) {
        return $(`form#checkboxes > input:nth-of-type(${index})`)
    }

    clickOnCheckBoxElement(index) {
        this.getCheckBoxElement(index).waitForDisplayed();
        this.getCheckBoxElement(index).click();
    }



}

module.exports = new HerokuappPage();