const http = require('http');
const shareConfig = require('../shareConfig');
const port = shareConfig.nodeServerPort || process.env.PORT;
import middlewares from './middlewares';
console.log('middlewares===',typeof(middlewares))
http.createServer((req,res)=>{
    middlewares(req,res)
}).listen(port)
console.log(`react ssr 监听${port}`)