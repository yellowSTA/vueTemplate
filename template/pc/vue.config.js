const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            return{
                plugins: [
                    new CompressionPlugin({
                        test:/\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        } else {
            // 为开发环境修改配置...
        }
    }
}