const proConfig = require('../../shareConfig');
const nodeServerPort = proConfig.nodeServerPort;
require('./free-prot')(nodeServerPort); //启动前检查端口是否占用，杀掉占用端口的进程
require('../dist/server/app'); //引入打包后的文件，这个入口在webpack配置中设置