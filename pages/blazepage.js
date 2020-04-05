class BlazePage{

    get parent(){
        return $('ul.list-nav-links');
    }

    get children(){
        return this.parent.$$('li');
    }

    get getTextForLi(){
        return this.children.filter(element => {
            console.log("Element Text: ==> ", element.getText());
        });
    }

}

module.exports = new BlazePage();