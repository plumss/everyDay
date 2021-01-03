const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const resolvePath = (pathStr) => path.resolve(__dirname,pathStr);
process.env.BABEL_ENV = 'node'; //设置babel的运行环境变量
module.exports={
    target:'node',
    entry:resolvePath('../reactSSR/app.js'),
    output:{
        filename:'index.js',
        path:resolvePath('../dist/server')
    },
    plugins:[
        new CleanWebpackPlugin()
    ],
    externals:[nodeExternals()],
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}