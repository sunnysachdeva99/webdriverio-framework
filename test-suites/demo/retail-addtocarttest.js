// assert = require('chai').assert
// expect = require('chai').expect
const homepage = require('../../pages/retail-homepage')
const pdppage = require('../../pages/retail-pdppage')

describe('PDP page Add items to cart', function(){
    it('Add item to cart with browsing', function(){
        // homepage.refresh_baseUrl();
        homepage.add_item_by_browse();
        // homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
        browser.pause(10000);

        pdppage.add_to_cart();
        homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
        homepage.cont_shop();
        homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
    })
})

    describe('Search keyword and add product to cart', function() {

        it('Check In Stock Of Product', function() {
            homepage.get_summer_dresses();
            stock = homepage.check_stock();
            console.log('Stock availability : ', stock);
            expect(stock).to.equal('In stock');
        })

        it('Add product to cart and validate the price, quantity, color and size of product in cart', function(){
            homepage.add_item_by_search();
            homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
            price = pdppage.get_price_pdp();
            pdppage.inc_quantity();
            pdppage.inc_quantity();
            pdppage.inc_quantity();
            quantity = pdppage.get_quantity_pdp();
            size = 'M';
            pdppage.get_size_pdp(size);
            color = pdppage.add_color();
            name = pdppage.get_dress_name_pdp();
            pdppage.add_to_cart();
            homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
            success = pdppage.get_success();
            dress = pdppage.get_dress_name_cart();
            color_size = pdppage.get_color_size_cart();
            qnt = pdppage.get_quantity_cart();
            expect(qnt).to.equal(quantity);
            prc = pdppage.get_price_cart();
            price = parseFloat(price.match(/\d+/g).map(Number).join('.')) * parseInt(quantity);
            expect(success).to.equal('Product successfully added to your shopping cart');
            expect(prc).to.equal('$' + price.toString());
            expect(dress).to.equal(name);
            expect(color_size).to.include(color);
            expect(color_size).to.include(size);
            homepage.cont_shop();
    })
})

    describe('Add item to cart by features', function() {
        it('Adding item to cart by selecting the features and validating the price, quantity, color and size', function(){
            homepage.get_dresses();
            homepage.check_catalog();
            homepage.check_size();
            homepage.add_item_by_feature();
            homepage.wait_for_elem(homepage.footer_news_letter, 'Newsletter');
            price = pdppage.get_price_pdp();
            pdppage.inc_quantity();
            pdppage.inc_quantity();
            pdppage.inc_quantity();
            pdppage.dec_quantity();
            quantity = pdppage.get_quantity_pdp();
            //browser.debug()
            //$('select#group_1').selectByVisibleText('M')
            size = pdppage.get_size_pdp3();
            color = pdppage.add_color3();
            name = pdppage.get_dress_name_pdp();
            pdppage.add_to_cart();
            homepage.wait_for_elem(homepage.cont_shop_link, 'Continue shopping');
            success = pdppage.get_success();
            dress = pdppage.get_dress_name_cart();
            color_size = pdppage.get_color_size_cart();
            expect(color_size).to.include(size || $('select#group_1').getText()[0]);
            qnt = pdppage.get_quantity_cart();
            prc = pdppage.get_price_cart();
            price = parseFloat(price.match(/\d+/g).map(Number).join('.')) * parseInt(quantity);
            expect(success).to.equal('Product successfully added to your shopping cart');
            expect(dress).to.equal(name);
            expect(color_size).to.include(color);
            expect(qnt).to.equal(quantity);
            expect(prc).to.equal('$' + price.toString());
            homepage.cont_shop();
        //browser.debug()
    })
})