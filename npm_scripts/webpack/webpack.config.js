var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PackageJson = require(path.resolve('./package.json'));
var noReload = process.argv.indexOf('no-reload') !== -1 ? true : false;

var WDS = {
	protocol: "https",
	host: "localhost",
	port: 3000
}

var getWebpackConfig = function (env) {
	var config = {
		entry: {
			index: [path.resolve('./app/src/index/index.js')]
		},
		output: {
			path: path.resolve("./app/build"),
			filename: "[name]/[name].js",
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					query: {
						presets: ['es2015']
					},
					exclude: /node_modules/,
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader")
				},
				{
					test: /\.scss$/,
					loader: ExtractTextPlugin.extract(
						'style-loader!',
						'css?sourceMap!' + 'sass?sourceMap'
					)
				}
			]
		},
		plugins: [
			new ExtractTextPlugin("./[name]/[name].css", {allChunks: true, disable: (env === 'dev')}),

			new webpack.DefinePlugin({
				__PACKAGEJSON__: JSON.stringify(PackageJson),
				__ENV__: JSON.stringify(env)
			}),

			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './app/src/index/index.html.ejs',				
				PackageJson: PackageJson,
				ENV: env,
				inject: false
			}),

			new webpack.NoErrorsPlugin()
		],
	};

	if (env === 'dev') {
		config.devtool = "inline-source-map";

		config.plugins.push(new webpack.HotModuleReplacementPlugin());
		config.WDS = WDS;
		config.output.publicPath = WDS.protocol + '://' + WDS.host + ':' + WDS.port + '/';
		config.entry.index.unshift(
			'webpack-dev-server/client?' + config.output.publicPath,
			'webpack/hot/only-dev-server'

		);
	} else {
		config.plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
	}
	return config;
};

module.exports = getWebpackConfig;