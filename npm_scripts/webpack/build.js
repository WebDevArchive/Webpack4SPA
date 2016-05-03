var webpack = require('webpack');
var buildConfig = require('./webpack.config.js')('build');
var path = require('path');
var PackageJson = require(path.resolve('./package.json'));
var notifier = require('node-notifier');
var noNotify = process.argv.indexOf('no-notify') !== -1 ? true : false;

console.log(PackageJson.name + ' (v' + PackageJson.version + '):');
console.log('Production build.');
console.log('-----------------');

var compiler = webpack(buildConfig);
compiler.run(function (err, stats) {

	if (!noNotify) notifier.notify({
		title: 'Production build (v' + PackageJson.version + ').',
		message: "Hash: " + stats.hash
	}, function (err, response) {});

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
