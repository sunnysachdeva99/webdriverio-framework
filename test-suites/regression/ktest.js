describe('ShopNow Element Visual Test', () => {
    before(async () => {
        await browser.url('/');
    });

    it('findout the element', function () {
        // var shopNow = $("//div[@id='hpThreeMOutfitbar']/div/p[2]/span");
        var shopNow = $("div#hpThreeMOutfitbar > div > p:nth-of-type(2) > span");

        console.log('shopNow: ', shopNow.isDisplayedInViewport());
        if (shopNow.isDisplayedInViewport() == false) {
            console.log('Inside: ');
            shopNow.scrollIntoView();
            browser.pause(2000);
            $('button.semi-circle > span').click();
        }
    });

    it('should save shop now element screen', () => {
        // Save an element
        //div[@id='hpShopRail']/div[2]/div/div[@class='glide__slides']
        browser.saveElement($("div#hpShopRail > div:nth-of-type(2) > div > div.glide__slides"), 'ShopNowElement', {
            resizeDimensions: {
                top: 10,
                right: 5,
                bottom: 30,
                left: 10,
            }
        });
    });

    it('should compare shop now screen successful with baseline', () => {
        // Check an element
        expect(browser.checkElement($("div#hpShopRail > div:nth-of-type(2) > div > div.glide__slides"), 'ShopNowElement', {
            ignoreAntialiasing: true,
        })).equal(0);
    });
});


describe('ForgotPassword Visual Test', () => {
    before(async () => {
        browser.newWindow(); // it will create a new window session for next scenario
        await browser.url('/');
    });

    it('findout the element', function () {
        var updatePwd = $('//div[@class="footer-links"]/div[3]/ul/li[ a/text()="Update Password"]');
        console.log('UpatedPwd: ', updatePwd.isDisplayedInViewport());
        updatePwd.scrollIntoView();
        updatePwd.click();
        browser.pause(2000);

        var forgotPwdEle = $("a[title='Forgot password?']");
        forgotPwdEle.click();
        browser.pause(1000);
    });

    it('should save forgot password element screen', () => {
        // Save an element
        browser.saveElement($('div.modal_recpass'), 'ForgotPwdElement', {
            resizeDimensions: {
                top: 10,
                right: 5,
                bottom: 30,
                left: 10,
            }
        });
    });

    it('should compare forgot password screen successful with baseline', () => {
        // Check an element
        expect(browser.checkElement($('div.modal_recpass'), 'ForgotPwdElement', {
            ignoreAntialiasing: true,
        })).equal(0);
    });
});


