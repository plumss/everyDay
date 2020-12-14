//判断服务器上有没有upload目录，没有就创建目录，有不做操作
const fs = require('fs')
const path = './uploadMir'
fs.stat(path,(err,data)=>{
    if(err){
        console.log("没有目录")
        mkdir(path);
        return;
    }
    if(data.isDirectory()){
        console.log('upload目录已存在')
        return;
    }else{
        mkdir(path)
    }
})
function mkdir(dir){
    fs.mkdir(dir,(err)=>{console.log('uploadc');return;})
}