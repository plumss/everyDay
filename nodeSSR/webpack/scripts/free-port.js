module.exports=function(port){
    if(process.platform&&process.platform!=='win32'){
        const args = process.argv.slice(2)
        let proArg = args && args[0]
        if(proArg && proArg.indexOf('--')>0){
            port = proArg.split('--')[1]
        }
        let order = `lsof -i :${port}`
        let exec = require('child_process').exec;
        exec(order,(err,stdout,stderr)=>{
            if(err) return console.log(`查看端口命令出错${err}`)
            stdout.split('\n').filter(line=>{
                let p = line.trim().split(/\s+/)
                let address = p[1]
                if(address!=undefined && address!='PID'){
                    exec('kill -9'+address,(err,stdout,stderr)=>{
                        if(err) return console.log("释放指定端口失败！！")
                        console.log('port kill')
                    })
                }
            })
        })
    }
}