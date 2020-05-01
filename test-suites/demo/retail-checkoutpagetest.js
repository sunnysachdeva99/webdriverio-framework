// const loginPage=require("../pages/loginPage");
const summaryPage = require("../../pages/retail-summarypage");
const addressPage = require("../../pages/retail-addresspage");
const shippingPage = require("../../pages/retail-shippingpage");
const paymentPage = require("../../pages/retail-paymentpage");

describe("Checkout Page", function () {

    it("Summary - Address - Shipping - Payment Checkout Process.", function () {
        // loginPage.loginToUser();
        // browser.pause(100000);
        summaryPage.clickCartButton();
        // assert.equal(false, summaryPage.isCartEmpty(), 'Cart is emapty.');

        assert.equal(true, summaryPage.isCartItemsPresent(), 'Items are not avaiable in cart');
        var count = summaryPage.getTotalItemsCount().length;

        var itemPrice = new Array();
        for (let index = 1; index <= count; index++) {
            let arrayIndex = index - 1;
            var inStock = summaryPage.getInStockText(index);
            var unitPrice = summaryPage.getUnitPrice(index);
            var quantity = summaryPage.getQuantity(index);
            itemPrice[arrayIndex] = summaryPage.getTotalPriceForProduct(index);
            var totalSinleProductPrice = unitPrice * quantity;
            assert.equal('In stock', inStock, `In stock is not available for ${index} row...`);
            assert.equal(itemPrice[arrayIndex], totalSinleProductPrice, `Single Item Total Price is wrong at ${index} position ...`);
        }
        console.log('individual Item prices--', itemPrice);
        const sumAmount = itemPrice.reduce(add, 0); // with initial value to avoid when the array is empty
        function add(accumulator, a) { return accumulator + (+ parseFloat(a).toFixed(2)); }

        var getShippingPrice = summaryPage.getShippingPrice();
        var getTaxPrice = summaryPage.getTaxPrice();
        var getTotalCartPrice = summaryPage.getTotalCartPrice();
        var totalCartPrice = (+ parseFloat(sumAmount).toFixed(2)) + (+ parseFloat(getShippingPrice).toFixed(2)) + (+ parseFloat(getTaxPrice).toFixed(2));
        assert.equal(getTotalCartPrice, totalCartPrice, 'Total Cart Price is wrong....');

        summaryPage.clickProceedToCheckout();
        assert.equal(true, addressPage.isAddressDeliveryPresent(), 'Delivery address is not present  in address Page');
        assert.equal(true, addressPage.isBillingAddressPresent(), 'Billing address is not present in address Page');

        addressPage.clickProceedToCheckout();
        assert.equal(true, shippingPage.isShippingCarrierPresent(), 'Shipping Details Not Available.');

        shippingPage.clickTermsOfServices();
        shippingPage.clickProceedToCheckout();
        assert.equal(totalCartPrice, paymentPage.getTotalCartPrice(), 'Payment Cart Total Price Is Wrong.');
        assert.equal(true, paymentPage.isBankWirePaymentPresent(), 'Bankwire payment option is not present in payment Page');
        paymentPage.clickBankWirePayment();
        assert.equal('You have chosen to pay by bank wire. Here is a short summary of your order:', paymentPage.getPaymentTypeMessage(), 'Payment type message is not present')
        paymentPage.clickConfirmMyOrder();
        assert.equal('Your order on My Store is complete.', paymentPage.getConfirmationMessage(), 'Confrimation message is not present')

    })

})