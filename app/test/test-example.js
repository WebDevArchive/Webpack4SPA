var fs = require('fs');
var path = require('path');
var assert = require('assert');

var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var By = require('selenium-webdriver').By;
var until = require('selenium-webdriver').until;

var chromeProfileDir = path.resolve('./app/test/profile');
var screenshotDir = path.resolve('./app/test/screenshots/');

var options = new chrome.Options();
options.addArguments("window-size=800,800");
options.addArguments("user-data-dir=" + chromeProfileDir);
driver = new chrome.Driver(options);

// var scr = `document.getElementById('readme').scrollIntoView(true)`;

function takeScreenshot(driver, fileName) {
	driver.takeScreenshot().then(function(data) {
		fs.writeFileSync(path.resolve(screenshotDir, fileName), data, 'base64');
		console.log('Take screenshot: Done.');
	});
};

driver.get('https://github.com/WebDevArchive/Webpack4SPA#readme').then(function() {
	driver.getTitle().then(function(title) {    
//		driver.findElement(By.name('q')).sendKeys('Webpack4SPA');
//		driver.executeScript(scr);
		takeScreenshot(driver, 'test-example.png');
		driver.quit();
	});    
});
