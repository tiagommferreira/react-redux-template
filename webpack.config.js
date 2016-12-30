var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, "client"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./client.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                loader: debug ? 'style!css-loader!sass-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]' : ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    output: {
        path: __dirname,
        filename: "client.min.js"
    },
    devServer: {
        historyApiFallback: true,
        // proxy calls to api to our own node server backend
        proxy: {
            '/api/*': 'http://localhost:3000/'
        }
    },
    plugins: debug ? [] : [
        new ExtractTextPlugin('./style.css', {
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};