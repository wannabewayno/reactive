const path = require('path');
var ExtractTextPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src',
    output: {
        path: path.resolve('lib'),
        filename: 'reactor.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }, {
                test: /\.*css$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
        ]
    }
}