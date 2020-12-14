const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const fileType = require('./data/contentType')
http.createServer(function (req, res) {
    let pathName = url.parse(req.url).pathname; //获取去掉参数的路由名或文件名
    if (pathName !== '/favicon.ico') {
        fs.readFile(`./static${pathName}`, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-type': "text/plain;charset=utf-8" })
                res.end("资源未找到")
            }
            let extname = path.extname(pathName); //获取后缀名
            let isFile = fileType[extname]
            console.log('isfile===', isFile)
            res.writeHead(200, { 'Content-type': `${isFile};charset=utf-8` })
            res.end(data)
        })
    }
}).listen(80)