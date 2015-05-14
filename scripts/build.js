console.log('--- Build');

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

var compiler = webpack(config);
compiler.run(function (err, stats) {
    console.log(stats.toJson());
});






