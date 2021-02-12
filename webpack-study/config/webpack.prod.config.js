const path = require('path');
const webpack = require('webpack');
const base = require('./webpack.config');
//抽离 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 合并组合配置
const {merge} = require('webpack-merge');
const prodConfig = {
    mode: "production",
    entry: base.entry,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[chunkhash].js"
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader"
            ],
        }]
    },
    plugins: [
        // 显示webpack打包进度
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash].css'
        })
    ]
}

module.exports = merge(base, prodConfig);
