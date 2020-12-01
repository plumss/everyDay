const path = require('path');
const resolvePath = (pathStr) => path.resolve(__dirname,pathStr);
module.exports = {
    mode:'development',
    entry:resolvePath('../src/client/app.js'),
    output:{
        filename:'index.js',
        path:resolvePath('../dist/static')
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:[
                    'css-loader', //css编译器
                    'postcss-loader', //css样式前缀自动填充
                    'less-loader'  //less编译器
                ]
            }
        ]
    }
}