var webpack = require('webpack');
var webpackDevServer = require("webpack-dev-server");
var devConfig = require('./webpack.config.js')('dev');
var path = require('path');
var PackageJson = require(path.resolve('./package.json'));
var notifier = require('node-notifier');
var noNotify = process.argv.indexOf('no-notify') !== -1 ? true : false;

console.log(PackageJson.name + ' (v' + PackageJson.version + '):');
console.log('Development build');
console.log('-----------------');

console.log('Webpack: watch');
var compiler = webpack(devConfig);
compiler.watch({
	// poll: true
}, function(err, stats) {

	WDS._detect();
/*
	if (!noNotify) notifier.notify({
		title: 'Development build.',
		message: "Hash: " + stats.hash,
		icon: path.resolve('./app/src/icons/48.png'),
		t: 1500
	}, function (err, response) {});
*/
	console.log(stats.toString({
		assets: true,
		chunks: false,
		colors: true,
		hash: false,
		modules: false,
		reasons: false,
		source: false,
	}));

});

var WDS = new webpackDevServer(webpack(devConfig), {
	publicPath: devConfig.output.publicPath,
	https: devConfig.WDS.protocol,
	watchOptions: {
		aggregateTimeout: 50,
		// poll: true
	},
	hot: true,
	quiet: false,
	noInfo: false,
	stats: {
		assets: false,
		chunks: false,
		colors: true,
		hash: false,
		modules: false,
		reasons: false,
		source: false,
	}
});

WDS.listen(devConfig.WDS.port, devConfig.WDS.host, function (err, result) {
	if (err) {
		console.log(err);
	} else {
		console.log('Webpack: dev-server' + ' (listening at ' + devConfig.output.publicPath + ")\n");
	}
});

WDS._detect = function(sockets, stats, force) {
//	WDS.sockWrite(WDS.sockets, "DETECTED")
/*
	notifier.notify({
		title: 'DETECTED!',
		message: "@@@@@@@@",
		icon: path.resolve('./app/src/icons/48.png'),
		t: 5500
	}, function (err, response) {});
*/
}


/*
WDS.app.get("/webpack-dev-server/detected/*", function(req, res) {
	notifier.notify({
		title: 'DETECTED!',
		message: "@@@@@@@@",
		icon: path.resolve('./app/src/icons/48.png'),
		t: 5500
	}, function (err, response) {});
}.bind(WDS));
*/