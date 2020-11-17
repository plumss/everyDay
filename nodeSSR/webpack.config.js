const path = require('path');
//定义个通用的路径转换方法
const resolvePath = (pathStr) => path.resolve(__dirname,pathStr);
module.exports = {
    mode:'development',
    entry:resolvePath('./src/index.js'),
    output:{
        filename:'index.js',
        path:resolvePath('./dist')
    },
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