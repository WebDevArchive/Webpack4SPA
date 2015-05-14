console.log('--- Server');
console.log('http://localhost:8008/webpack-dev-server/');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var devServer = new WebpackDevServer(
    webpack(config), {
        contentBase: './app/dist',
        publicPath: '/dist/'
    }
).listen(8008, 'localhost');