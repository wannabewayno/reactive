// webpack.config.js
const path = require('path');


module.exports = {
    mode:'production',
    entry: './src/components/inputs/Dropdown/index.jsx',
    output: {
        path: path.resolve('build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /(\.jsx$|\.js$)/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    externals: {
        react: 'react' 
    }
};