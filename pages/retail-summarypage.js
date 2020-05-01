class SummaryPage {

    clickCartButton() {
        return $("//a[@title='View my shopping cart']").click();
    }

    isCartEmpty() {
        return $('p.alert.alert-warning').isDisplayed();
    }

    isCartItemsPresent() {
        return $("//table[@id='cart_summary']/tbody[1]/tr").isDisplayed();
    }

    getUnitPrice(row) {
        return $(`//table/tbody/tr[${row}]/td[4]/span/span`).getText().replace(/\$/g, '');
    }

    getQuantity(row) {
        return $(`//table/tbody/tr[${row}]/td[5]/input[2]`).getValue();
    }

    getTotalPriceForProduct(row) {
        return $(`//table/tbody/tr[${row}]/td[6]/span`).getText().replace(/\$/g, '');
    }

    getTotalCartPrice() {
        return $('#total_price').getText().replace(/\$/g, '');
    }
    getShippingPrice() {
        return $('#total_shipping').getText().replace(/\$/g, '');
    }

    getTaxPrice() {
        return $('#total_tax').getText().replace(/\$/g, '');
    }

    getTotalProductsPrice() {
        return $('#total_product').getText().replace(/\$/g, '');
    }

    getTotalItemsCount() {
        return browser.$$('#cart_summary>tbody>tr');
    }

    clickProceedToCheckout() {
        $("//span[text()='Proceed to checkout']").click();
    }

    getInStockText(row){
        return $(`//table/tbody/tr[${row}]/td[3]/span`).getText();
    }

}

module.exports = new SummaryPage();