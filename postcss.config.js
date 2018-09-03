module.exports={
    plugins: [
        require('autoprefixer')({    // 自动添加前缀插件
            "browsers": [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions"
            ]
        })
    ]
}