class PaymentPage {

    getTotalCartPrice() {
        return $('#total_price').getText().replace(/\$/g, '');
    }


    isBankWirePaymentPresent() {
        return $('a.bankwire').isEnabled();
    }

    clickBankWirePayment() {
        $('a.bankwire').isEnabled();
        $('a.bankwire').click();
    }

    clickChequePayment() {
        $('a.cheque ').isEnabled();
        $('a.cheque').click();
    }

    clickConfirmMyOrder() {
        $("//span[text()='I confirm my order']").isEnabled();
        $("//span[text()='I confirm my order']").click();
    }

    getPaymentTypeMessage() {
        return $('p.cheque-indent>strong').getText();
    }

    getConfirmationMessage() {
        return $('p.cheque-indent>strong').getText();
    }

}

module.exports = new PaymentPage();