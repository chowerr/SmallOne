const path = require('path')//相对路径 node环境
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //入口
    entry: {
        //可以有多个入口，也可以有一个，如果只有一个，就默认从这一个开始分析
        'main': './src/main.js'
    },
    output: {
        //指定产出的目录  最好绝对路径path
        path: path.resolve('./dist'),//相对转换绝对
        filename: 'build.js'
    },

    //声明模块
    //包含各个loader
    module: {
        loaders: [//webpack后面版本可以叫roles
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                //limit文件大小字节
                //如果文件大于limit 生成一个文件
                //小于limit  则生成base64到build.js中
                //建议比较小的图片，使用base64的方式
                //base 64少引入了一个文件 但是比较原来大小打了1/3
                test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=50134'
            },
            {
                test:/\.less$/,loader:'style-loader!css-loader!less-loader'
            }


        ]
    },



    watch: true,//文件发生改动，自动生成build.js
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',//参照物  快速移动
        })
    ]

}