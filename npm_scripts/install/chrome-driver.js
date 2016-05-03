var path = require('path');
var fs = require("fs");
var request = require("request");
var AdmZip = require('adm-zip');

var url='http://chromedriver.storage.googleapis.com';
var destinationDir = path.resolve('./node_modules/.bin/');
var latestRelease = '';
var linuxArch = '';
var chromeDriverZip = '';
var chromeDriverFile = 'chromedriver';
var downloadLink = '';

request(url + '/LATEST_RELEASE', function(error, response, body) {
	latestRelease = parseFloat(body);
	console.log ('Chromedriver latest release: ' + latestRelease);

	switch (process.platform) {
		case 'darwin':
			chromeDriverZip='chromedriver_mac32.zip';
		break;
		case 'win32':
			chromeDriverZip='chromedriver_win32.zip';
			chromeDriverFile = chromeDriverFile + '.exe';
		break;
		default:
			linuxArch = parseInt(process.arch.replace( /^\D+/g, ''));
			linuxArch = (linuxArch === 64) ? 64 : 32;
			chromeDriverZip='chromedriver_linux' + linuxArch + '.zip';
		break;
	}

	downloadLink = url + '/' + latestRelease + '/' + chromeDriverZip;
	console.log('Download: ' + downloadLink);

	request(downloadLink)
		.pipe(fs.createWriteStream(chromeDriverZip))
		.on('close', function () {
			console.log("Unzip and move to '.bin'");
			var zip = new AdmZip(chromeDriverZip)
			zip.extractAllTo(destinationDir, true);
			fs.chmod(path.resolve(destinationDir, chromeDriverFile), 0755);
			fs.unlink(chromeDriverZip, (err) => {
				if (err) throw err;				
				console.log('Done.');
			});
		});
});
