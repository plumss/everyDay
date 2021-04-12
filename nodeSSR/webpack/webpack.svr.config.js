const path = require('path');
const nodeExternal = require('webpack-node-externals');
const webpack = require('webpack');
const resolvePath = (pathStr) => path.resolve(__dirname,pathStr);
process.env.BABEL_ENV = 'node';
const isProd = process.env.NODE_ENV === 'production'
console.log('isProd===',isProd)
module.exports = {
        target:"node",
        entry:resolvePath('../src/ssr/app.js'),
        output:{
            filename:'app.js',
            path:resolvePath('../dist/server')
        },
        externals:[nodeExternal()],
        module:{
            rules:[{
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/
            }]
        }
}