        
const Webpack = require('webpack')
const path = require("path")
const merge = require('webpack-merge')
const base = require("./webpack.base")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')    // 提取 css

module.exports = merge(base, {
    output: {
        publicPath: '/'     // 主要用于处理静态文件路径
    },
    module: {
        rules: [
            // vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 模块，解读css,图片如何转换，压缩
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
                exclude: /node_modules/
            },
            // less loader
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"],
                exclude: /node_modules/
            },
            // less loader
            {
                test: /\.(scss|sass)$/,
                use: [MiniCssExtractPlugin.loader,"css-loader", "sass-loader", "postcss-loader"],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './static/css/[name].[contenthash:8].css'
        })
    ]
})