var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./../package.json');
var handlebars = require('handlebars');

module.exports = {
	context: path.resolve("./app/src"),
    entry: {
    	vendor: [
            path.resolve('./app/src/vendor/vendor1.js'),
            path.resolve('./app/src/vendor/vendor2.js'),
        ],
		index: path.resolve('./app/src/index.js'),
	},
    output: {
        path: path.resolve("./app/dist"),
        filename: "[name]/[name].js"
    },
	module: {
    	loaders: [
			{
		        test: /\.js$/,
        		exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader',
				query: {
					helperDirs: [
						__dirname + "/hbshelpers"
					]
				}
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),

		new ExtractTextPlugin("[name]/[name].css", {}),

		new HtmlWebpackPlugin({
			title: pkg.name,
	    	pkg: pkg,
		    templateContent: function(templateParams, webpackCompiler) {
      			var hbs = require(path.resolve('./app/src/index.hbs'));
      			return hbs(templateParams);
    		}
  		})

	],
};