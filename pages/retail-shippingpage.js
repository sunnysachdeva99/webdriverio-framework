class ShippingPage {

    isShippingCarrierPresent() {
        return $('div.delivery_options').isDisplayed();
    }

    clickTermsOfServices() {
        $('#cgv').click();//click Term od Services checkbox
    }

    clickProceedToCheckout() {
        $("//button[@type='submit']/span[contains(text(),'Proceed to checkout')]").click();
    }
}

module.exports = new ShippingPage();