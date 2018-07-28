const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'production',
    entry:{
        bundle:path.resolve(process.cwd(),'src/main.js')
    },
    output:{
        path:path.resolve(process.cwd(),'dist'),
        filename:'[name].js',
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:['babel-loader'],
                exclude:/node_modules/
            },
            {
                test:/\.(css)$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve(process.cwd(),'src')
        },
        extensions:['.js','.jsx']
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:8080,
        hot:true,
        open:true,
        quiet: true,//不打印多余的信息
        historyApiFallback:true//刷新页面时不会报错
    },
    devtool:"eval-source-map"//显示具体文件
}