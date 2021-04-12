

//基于webpack配置 开启对服务器端代码的编译和监听
const webpack = require('webpack');
const config = require('../webpack.dev.config');
const compiler = webpack(config);
const watching = compiler.watch({
    aggregateTimeout:300, //类似节流功能，聚合多个更改一起构建
    ignored:/node_modules/, //排除文件
    poll:2000, //轮循的方式检查变更,监听没生效试试这个
},(err,stats)=>{
    let json = stats.toJson('minimal');
    console.log(json)
    if(json.errors){
        json.errors.forEach(item => {
            //console.log('json.errors--',item)
        });
    }
    if(json.warnings){
        json.warnings.forEach(item=>{
            //console.log("json.warings---",item)
        })
    }
    //定义一个常量,编译完成后，通知主进程重启node服务,主进程通过此标志来进行判断是否重启
    console.log('前端代码监听：');
});




// //收到退出信号 退出自身进程
// process.stdin.on('data',(data)=>{
//     if(data.toString()==='exit'){
//         process.exit();
//     }
// });