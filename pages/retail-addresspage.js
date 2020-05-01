class AddressPage{

    clickProceedToCheckout(){
        $("//span[text()='Proceed to checkout']").click();
    }

    isAddressDeliveryPresent(){
        return $("//h3[text()='Your delivery address']").isDisplayed();
    }

    isBillingAddressPresent(){
        return $("//h3[text()='Your billing address']").isDisplayed();
    }
}

module.exports=new AddressPage();