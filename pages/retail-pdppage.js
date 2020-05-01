class ProductDetailPage {
    get price_link(){
        return $('span[id="our_price_display"]')
    }

    get inc_quantity_link(){
        return $('i[class="icon-plus"]')
    }

    get dec_quantity_link(){
        return $('i[class="icon-minus"]')
    }

    get color2(){
        return $('a[id="color_14"]')
    }
    get color3(){
        return $('a[id="color_13"]')
    }

    get quntity_link(){
        return $('input[id="quantity_wanted"]')
    }

    get size_pdp_link(){
        return $('select#group_1')
    }

    get dress_name(){
        return $('h1[itemprop="name"]')
    }

    
    get add_cart(){
        return $('//*[@id="add_to_cart"]/button/span')
    }

    get success_link(){
        return $('h2')
    }

    get dress_name_cart(){
        return $('span[id="layer_cart_product_title"]')
    }

    get color_size_cart(){
        return $('span[id="layer_cart_product_attributes"]')
    }

    get quantity_cart(){
        return $('span[id="layer_cart_product_quantity"]')
    }

    get price_cart(){
        return $('span[id="layer_cart_product_price"]')
    }

    get_price_cart(){
        return this.price_cart.getText()
    }

    get_quantity_cart(){
        return this.quantity_cart.getText()
    }
    get_color_size_cart(){
        return this.color_size_cart.getText()
    }

    get_dress_name_cart(){
        return this.dress_name_cart.getText()
    }

    get_success(){
        return this.success_link.getText()
    }

    get_price_pdp(){
        return this.price_link.getText()
    }

    get_dress_name_pdp(){
        return this.dress_name.getText()
    }

    add_to_cart(){
        this.add_cart.click()
    }

    inc_quantity(){
        this.inc_quantity_link.click()
    }

    dec_quantity(){
        this.dec_quantity_link.click()
    }

    get_quantity_pdp(){
        return this.quntity_link.getValue()
    }

    get_size_pdp(siz){
        this.size_pdp_link.selectByVisibleText(siz)
        return this.size_pdp_link.getAttribute('title')
    }

    get_size_pdp3(){
        return this.size_pdp_link.getAttribute('title')
    }

    add_color(){
        this.color2.click()
        return this.color2.getAttribute('title')
    }

    add_color3(){
        this.color3.click()
        return this.color3.getAttribute('title')
    }
}

module.exports = new ProductDetailPage()