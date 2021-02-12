const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config');
const {merge} = require('webpack-merge');
const devConfig = {
    mode: "development",
    target: "web",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].js"
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommosnJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader"
            ],
        }]
    },
    plugins: [
        new webpack.ProgressPlugin()
    ],
    devServer: {
        contentBase: path.join('./dist'),
        open: true,
        hot: true
    }
}

module.exports = merge(base, devConfig);
