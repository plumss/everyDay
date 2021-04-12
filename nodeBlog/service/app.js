const querystring = require('querystring');
const fileType = require('./conf/contentType');
const fs = require('fs');
const url = require('url');
const serverHandle = (req,res) => {
    const pathName = url.parse(req.url).pathname; //获取去掉参数的路由名或文件名
    if (pathName !== '/favicon.ico') {
        fs.readFile(`./static${pathName}`, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-type': "text/plain;charset=utf-8" })
                res.end("首页界面1111")
            }
            let extname = path.extname(pathName); //获取后缀名
            let isFile = fileType[extname]
            res.writeHead(200, { 'Content-type': `${isFile};charset=utf-8` })
            res.end(data)
        })
    }
}
module.exports = serverHandle