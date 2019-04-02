module.exports = {
    //入口
    entry: {
        //可以有多个入口，也可以有一个，如果只有一个，就默认从这一个开始分析
        'main':'./main.js'
    },
    output:{
        filename:'./build.js'
    },
    //线上无需watch
    // watch:true,//文件发生改动，自动生成build.js


}