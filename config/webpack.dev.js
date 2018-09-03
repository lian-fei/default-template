const Webpack = require('webpack')
const path = require("path")
const merge = require('webpack-merge')
const base = require("./webpack.base")


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
                use: ["vue-style-loader", "css-loader", "postcss-loader"]
            },
            // less loader
            {
                test: /\.less$/,
                use: ["vue-style-loader", "css-loader", "less-loader", "postcss-loader"]
            },
            // less loader
            {
                test: /\.(scss|sass)$/,
                use: ["vue-style-loader","css-loader", "sass-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        // 热更新
        new Webpack.HotModuleReplacementPlugin()
    ],
    //配置webpack开发服务功能
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),   // 设置基本目录结构
        host: "127.0.0.1",           // 服务器的ip地址
        compress: true,              // 服务器压缩是否开启
        port: '9090',                // 配置服务端口号
        overlay: {errors: true},     // 在页面上显示错误信息
        open: true,                  // 自动打开浏览器
        hot: true                    // 启动热更新
    },
    devtool: "#source-map"
})