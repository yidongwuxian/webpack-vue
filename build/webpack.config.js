var webpack    = require('webpack');
var path       = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  {
        index: [
                    './build/dev-client', path.resolve(__dirname, '../app/index/index.js')
                ],
        vendors: ['Vue']
    },
    output: {
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['','.js','.vue']
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'url',
                query:{
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app/index/index.html',
            template: path.resolve(__dirname, '../app/index/index.html'),
            inject:   true
        })
    ]
}
