react react-dom // react 基础库
@babel/core @babel/cli  //babel基础库
@babel/preset-react //编译 react代码
@babel/preset-env  //配置babel编译的一些选项
babel-loader //编译js代码
webpack webpack-cli  //webpack两个核心代码
koa2  // web开发框架
koa-static  //实现静态资源的访问

服务启动和自启  使用工具nodemon
项目目录
|--dist  //生产环境打包后的资源存放目录
| |--static //打包的静态资源文件
| | |--index.js  //打包后的文件
| |--server  //服务器端目录
| | |--app.js  //node server 启动入口
|--src  //源码目录
| |--client  //前端代码
| | |--app.js  //前端入口js
| | |--page  //业务页面目录
| |--server  //node代码目录
| |--share   //双端共享代码目录
| |--webpack //构建配置目录
| |

11.24 实现前后端代码自动编译，每次修改代码，node服务可以自动重启,代码热更新
    npm run dev 启动开发环境  "dev":"node webpack/scripts/start.js"
    npm run fe:watch 前端代码编译开启watch "fe:watch":"webpack --config ./webpack/webpack.dev.config.js --watch"
    服务器端代码打包配置文件  ./webpack/webpack.server.config.js
    npm run svr:watch 服务端代码构建执行命令 'svr:watch': 'node ./webpack/scripts/svr-code-watch.js'
    node服务器入口 ./webpack/scripts/svr-dev-server.js  