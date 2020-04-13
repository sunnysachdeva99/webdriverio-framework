class HomePage{
    get pageHeader(){ return $('h1'); }
    get subHeader(){return $('div.banner-text-content > p.sub-text');}
    get getStarted(){return $('div.banner-text-content > div >div.in-page-scroll');}
    get supportLink(){return $("//span[text()='Support']");}
    get mainMenu(){return $('ul.nav-main-menu')}

    nthElementFromMainMenu(index){
       return this.mainMenu.$$('li')[index];
    }
    get mainMenuList(){return this.mainMenu.$$('li')}
}

// this statement is defined to access this object from outsite of the class
module.exports = new HomePage();