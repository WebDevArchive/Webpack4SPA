var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./../package.json');

module.exports = {
	context: path.resolve("./app/src"),
    entry: {
    	vendor: [
            path.resolve('./app/src/vendor/vendor1.js'),
            path.resolve('./app/src/vendor/vendor2.js'),
        ],
		index: path.resolve('./app/src/index.js'),
//        general: path.resolve('./app/src/index.css'),
	},
//	output: {
//		path: path.resolve("./app/dist"),
//		filename: "index.js"
//	},
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
//			{
//		        test: /\.css$/,
//        		exclude: /node_modules/,
//				loaders: ['style-loader', 'css-loader'],
//			}
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
//			{ test: /\.css$/, loader: "style-loader!css-loader" },
		]
	},
	plugins: [
//		new webpack.optimize.UglifyJsPlugin(),
//		new HtmlWebpackPlugin({
//			template: './app/src/index.html'
//	    }),
//		new ExtractTextPlugin("index.css", {
//            allChunks: true
//        }),
		new ExtractTextPlugin("[name]/[name].css", {

        }),

	    new HtmlWebpackPlugin({
	    	template: './app/src/index.html',
	    	title: pkg.name,
	    	pkg: pkg,
//			"files": {
//    			"css": [ "index.css", 'vendor.css'],
//    			"js": [ "index.js"],
/*
    			"chunks": {
      				"index": {
	        			"entry": "index.js",
        				"css": ['index.css']
      				},
      				"vendor": {
	        			"entry": "vendor.js",
        				"css": ['vendor.css']
      				}
    			}
*/
//  			}
		})

	],
};