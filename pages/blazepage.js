class BlazePage {

    get parent() {
        return $('ul.list-nav-links');
    }

    get children() {
        return this.parent.$$('li');
    }

    get getTextForLi() {
        return this.children.filter(element => {
            console.log("Element Text: ==> ", element.getText());
        });
    }

    // $$ directly used to minimize the above more methods
    get mainLinksElementText() {
        return $$('div.home_feature > a').forEach(element => {
            console.log("Each Testing Platform Element Text: ==> ", element.getText());
        });
    }
}

module.exports = new BlazePage();