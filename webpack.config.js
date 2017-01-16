var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 8888
    },
    entry: ['./dev/js/index.js'],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot'],
                exclude: /node_modules/
            }, {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                }
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/'),
        filename: 'js/bundle.min.js',
        publicPath: '/src'

    },
    plugins: [new webpack.optimize.OccurrenceOrderPlugin()]
};