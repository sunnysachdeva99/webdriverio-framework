class HomePage {
    get pageHeader() {return $('h1');}
    get subHeading() {return $('div.banner-text-content > p.sub-text');}
    get supportLink() {return $("//span[text()='Support']");}
}

// to export this class outside of this class
module.exports = new HomePage();