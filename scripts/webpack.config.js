var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/src/index.js',
	output: {
		path: path.resolve("./app/dist"),
		filename: "index.js"
	},
	module: {
    	loaders: [
			{
		        test: /\.js$/,
        		exclude: /node_modules/,
				loaders: ['babel-loader'],
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			template: './app/src/index.html'
	    }),
	],
};