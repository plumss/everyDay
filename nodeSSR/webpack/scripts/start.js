const { spawn } = require('child_process');//用于创建子进程
const constantCode = require('./constant');
const chalk = require('chalk'); //为控制台输出的信息增加点色彩
const log = console.log;
const proConfig = require('../../src/share/pro.config');//引入双端配置文件，配置一些基础参数
const nodeServerPort = proConfig.nodeServerPort;
log(chalk.red('servers starting....'));
//前端代码构建 服务进程
const feCodeWatchProcess = spawn(process.platform === "win32" ? "npm.cmd" : "npm",['run','fe:watch'],{stdio:'inherit'});
//服务端代码监控和编译进程
const svrCodeWatchProcess = spawn(process.platform === "win32" ? "npm.cmd" : "npm",['run','svr:watch']);
//node 服务进程
let nodeServerProcess = null;
const startNodeServer = () => { //重启node服务
    nodeServerProcess && nodeServerProcess.kill();
    nodeServerProcess = spawn('node',['../svr-dev-server.js']);
    nodeServerProcess.stdout.on('data',print);
}
//控制台输出
function print(data){
    let str = data.toString();
    if(str.indexOf(constantCode.SVRCODECOMPLETED)>-1){
        startNodeServer(); //重启node服务
    }else{
        console.log('print=====');
    }
}
//监听服务端代码构建服务的对外输出 stdout事件
svrCodeWatchProcess.stdout.on('data',print);
//杀掉子进程
const killChild = () => {
    svrCodeWatchProcess && svrCodeWatchProcess.kill();
    nodeServerProcess && nodeServerProcess.kill();
    feCodeWatchProcess && feCodeWatchProcess.kill();
}
//主进程关闭退出子进程
process.on('exit',(code)=>{
    console.log("main process exit",code);
    killChild();
})
//非正常退出情况
process.on('SIGINT',function(){
    svrCodeWatchProcess.stdin.write('exit',(error)=>{
        console.log('svr code watcher process exit!');
    })
    killChild();
})