class RetailHomePage {

    // Visual Camparison

    getLogo() {
        return $('[src="http://automationpractice.com/img/logo.jpg"]');
    }

    getSigninbutton() {
        return $('[title="Log in to your customer account"]');
    }

    getBestseller() {
        return $('[src="http://automationpractice.com/img/p/1/2/12-home_default.jpg"]');
        // return $('div#center_column');
    }

    getMensCoats() {
        return $('[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img2.jpg"]');
    }

    getSocialBlock() {
        return $('[id="social_block"]');
    }


    // Category and PDP Home Pages
    get footer_news_letter() {
        return $('div[id="newsletter_block_left"] h4')
    }

    get header_logo() {
        return $('div[id="header_logo"]')
    }

    get search_link() {
        return $('input[id="search_query_top"]')
    }

    get cont_shop_link() {
        return $('span[title="Continue shopping"]')
    }

    get item1() {
        return $('img[src="http://automationpractice.com/img/p/2/0/20-home_default.jpg"]')
    }

    get item2() {
        return $('/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div/div[1]/div/a[1]/img')
    }

    get item3() {
        return $('/html/body/div/div[2]/div/div[3]/div[2]/ul/li[2]/div/div[1]/div/a[1]/img')
    }

    get category() {
        return $('a[class="sf-with-ul"]')
    }

    get dresses() {
        return $('=Dresses')
    }

    get summer_dresses() {
        return $('*=Summer')
    }

    get stock() {
        return $('/html/body/div/div[2]/div/div[3]/div[2]/ul/li[1]/div/div[2]/span/span')
    }

    get catalog() {
        return $('input[id="layered_category_10"]')
    }

    get check_size_link() {
        return $('input[id="layered_id_attribute_group_3"]')
    }

    check_size() {
        this.check_size_link.click()
    }

    check_catalog() {
        // browser.url('/')
        $('//*[@id="block_top_menu"]/ul/li[2]/a').click()
        this.catalog.click()
    }

    check_stock() {
        return this.stock.getText()
    }

    moveToCategoryPage() {
        // browser.url('/')
        // this.wait_for_elem(this.footer_news_letter, 'Newsletter')
        this.header_logo.click();
        browser.pause(1000);
        // this.wait_for_elem(this.footer_news_letter, 'Newsletter')
    }

    wait_for_elem(elem, target_text) {
        browser.waitUntil(() => elem.getText() == target_text, {
            timeout: 20000,
            timeoutMsg: 'Time out for expected ' + target_text
        })
    }

    add_item_by_browse() {
        let add_to_cart = $('#center_column > ul > li:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(1) > span')
        browser.execute(() => { $('#center_column > ul > li:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(1) > span').mouseover(); });
        // browser.pause(2000)
        add_to_cart.click()
        // browser.pause(2000)

        // this.item1.click()
    }

    add_item_by_search() {

        let more = $('#center_column > ul > li:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(2) > span')
        more.scrollIntoView();
        browser.execute(() => { $('#center_column > ul > li:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(2) > span').mouseover(); });
        more.click()

        // this.item2.click()
    }

    add_item_by_feature() {

        let more = $('#center_column > ul > li:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(2) > span')
        browser.execute(() => { $('#center_column > ul > li:nth-of-type(1) > div > div:nth-of-type(2) > div:nth-of-type(2) > a:nth-of-type(2) > span').mouseover(); });
        more.click()

        // this.item3.click()
    }

    cont_shop() {
        this.cont_shop_link.click()
    }

    get_summer_dresses() {
        // browser.url('/')
        this.category.click()
        this.dresses.click()
        this.summer_dresses.click()

    }

    get_dresses() {
        // browser.url('/')
        this.category.click()
        this.dresses.click()
    }

    search_with(text) {
        this.search_link.setValue(text)
        browser.keys('Enter')
        browser.pause(1000);
    }
}

module.exports = new RetailHomePage();