var webpack           = require('webpack');
var path              = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config            = require('./webpack.config');

config.vue     = {
    loaders: {
        css: ExtractTextPlugin.extract("css")
    }
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env':{
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendors',
        filename: 'vendors.js'
    }),
    new ExtractTextPlugin("../[name].[contenthash].css"),
    new HtmlWebpackPlugin({
        filename: 'app/index/index.html',
        template: path.resolve(__dirname, '../app/index/index.html'),
        inject:   true
    })
];

module.exports = config;
