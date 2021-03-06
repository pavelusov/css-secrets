const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [
            'angular',
            'angular-animate'
        ],
        app: './app/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate-loader!html-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    'presets': [
                        ["env", {
                            "targets": {
                                "browsers": [
                                    "last 2 versions",
                                    "safari >= 7",
                                    "ie >= 9"
                                ]
                            }
                        }]
                    ]
                }
            },
            {
                test: /\.yaml$/,
                loader: 'json-loader!yaml-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    devServer: {
        compress: false,
        host: "0.0.0.0",
        port: 5002,
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0s"
        }
    }
};
