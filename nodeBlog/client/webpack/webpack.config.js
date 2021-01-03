const path = require('path');
const webpack = require('webpack');
const htmlWbpackPlugin = require('html-webpack-plugin');// 生成html模板插件
const miniCssExtractPlugin = require('mini-css-extract-plugin'); // 外联css样式插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');//js压缩
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//css压缩
//const WebpackFtpUpload = require('webpack-ftp-upload-plugin');
//const path = require('path');
module.exports = (env) => {
 const isDev = env.development ? true : false;
 let base = {
     mode:isDev?"development":"production",
     entry:path.resolve(__dirname,'../src/app.js'),
     output:{
         filename:'[name].[hash:8].js',
         path:path.resolve(__dirname,'../dist/static')
     },
     resolve:{
        alias:{
            'api':path.join(__dirname,'../api/api.js')
        }
     },
     plugins:[
        // new htmlWbpackPlugin({ 
        //     template:path.resolve(__dirname, `../src/temp/index.html`),
        //     filename:'index.html',
        //     minify:!isDev && { //是开发环境不配置该项
        //         removeAttributeQuotes:true,
        //         collapseWhitespace:true
        //     },
        //     hash:true
        //     //favicon:path.join(projectPath,'favicon.ico')//网页标签栏logo
        // }),
        // new miniCssExtractPlugin({
        //     filename: '[name].css',
        //     chunkFilename: '[id].css',
        // }),
        new CleanWebpackPlugin(),
        // new webpack.DefinePlugin({ //定义全局变量
        //     ENV:JSON.stringify(env.development?false:true)
        // }),
        // new webpack.HotModuleReplacementPlugin() //热更新插件
    ],
    // optimization: { //打印更新的模块路径
    //     namedModules: true
    // },
     module:{
        rules:[
            { //编译html中的图片
                test:/\.html$/,
                use:['html-withimg-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use:{
                    loader:'url-loader',
                    options: {
                        limit: 10000,
                        outputPath:'img/'
                    }
              
                },
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react']
                  }
                }
            },
        {
            test:/\.css$/,
            use:[
                miniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    }
 }
 if(isDev){
     base.devServer={
        hot:true,
        port:4000,
        progress:true,
        compress:true,
        contentBase:'../dist/static'
     }
 }

base=Object.assign(base,{
    // optimization: {//优化项
    //     minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // },
    plugins:[
        // new WebpackFtpUpload({
        //     host: '111.231.61.192',
        //     port: '22', // default: 22
        //     username: 'root',
        //     password: 'hantan525826ZZ',
        //     local: path.join(__dirname,'../dist/src'), // eg. path.join(__dirname, 'dist')
        //     path: '/root/static', // eg. /var/www/ftp/
        // })   
    ]
 })
 return base;
}