describe('Example', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });
  
  it('should save some screenshots', () => {
  	// Save a screen
  	browser.saveScreen('ViewPage', {
  		disableCSSAnimation: true,
  		hideScrollBars: true,
  	});
  	
  	// Save an element
  	browser.saveElement($('nav.slidingNav ul'), 'FirstElemment', {
  		resizeDimensions: { 
  			top: 10, 
  			right: 5, 
  			bottom: 30, 
  			left: 10,
  		}
  	});
  	
  	// Save a full page screens
  	browser.saveFullPageScreen('FullPage', {
  		fullPageScrollTimeout: 3000,
  	});
  });
  
  it('should compare successful with a baseline', () => {
  	// Check a screen
  	expect(browser.checkScreen('ViewPage', {
  		blockOut: [ {
  				height: 10, 
  				width: 5, 
  				x: 40, 
  				y: 65
  			},{
  				height: 250, 
  				width: 500,
  				x: 0,
  				y: 35
  			},
  		],
  		ignoreAlpha: true,
  		blockOutStatusBar: true,
  	})).equal(0);
  	
  	// Check an element
  	expect(browser.checkElement($('nav.slidingNav ul'), 'FirstElemment', {
  		ignoreAntialiasing: true,
  		
  	})).equal(0);
  	
  	// Check a full page screens
  	expect(browser.checkFullPageScreen('FullPage', {
  		ignoreColors: true,
	  })).equal(0);
	  
	//   expect(
	// 	browser.checkFullPageScreen('FullPage', { 
	// 		hideAfterFirstScroll: [
	// 			$('nav-bar'),
	// 			$('chat-box'),
	// 		], 
	// 	})
	//   ).equal(0);
	});
});