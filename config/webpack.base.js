const path = require('path')
// const uglifyjsWebpackGlugin = require('uglifyjs-webpack-glugin')
const Webpack = require('webpack')                                       // Webpack
const htmlWebpackPlugin = require('html-webpack-plugin')                 // 引入js压缩插件
const htmlWithimgLoader = require('html-withimg-loader')                 // 处理html中的图片
const VueLoaderPlugin = require('vue-loader/lib/plugin')                 // vue
const CleanWebpackPlugin = require('clean-webpack-plugin')               // 清除dist目录

module.exports = {
    mode: "development",
    entry: {
        main: ['babel-polyfill', './src/main.js'],
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: './static/js/[name].[hash].js'
    },
    module: {
        rules: [
            // babel 配置
            {
                test: /\.(jsx|js)$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            // 处理html中的图片路径问题
            {
                test: /\.(htm|html)$/i,
                use: ['html-withimg-loader']
            },
            // 图片 loader
            {
                test: /\.(png|jpg|gif|jpeg|svg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,                      // 是把小于1000B的文件打成Base64的格式，写入js
                        outputPath: "./static/images/"    // 打包后的图片放到images
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "../src/components")
        },
        extensions: [".vue", ".js", ".css", ".less", ".sass", ".scss", ".json"]   // 省去扩展名
    },
    // 插件
    plugins: [
        // 压缩js
        // new uglifyjsWebpackGlugin()
        // 清除dist目录
        new CleanWebpackPlugin(['dist', 'dist/*.*'], {
            root: path.resolve(__dirname, '..')
        }),
        // 对html进行压缩
        new htmlWebpackPlugin({
            minify: {
                removeAttributeQuotes: true   // 去掉属性的双引号
            },
            hash: true,                       // 避免缓存js文件
            filename: "index.html",           // 生成html文件的路径和
            template: './src/index.html',
            inject: true                      // 
        }),
        // vue
        new VueLoaderPlugin()
    ]
}