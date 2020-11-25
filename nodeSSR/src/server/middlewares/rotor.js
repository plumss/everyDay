
var url =require("url"); //引入url模块
let fs = require("fs")

import React from  'react';
import Index from '../../client/pages/Index';
import {renderToString} from 'react-dom/server';

let staticPath = __dirname+"\\..\\static"

export default (request,respnse) => {
    let path = url.parse(request.url).pathname;
    let string = "nothing"
    if(path === '' || path === '/'){
        const html = renderToString(<Index />)
        string = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
            <div id='root'>${html}</div>
            <script type="text/javascript"  src="index.js"></script>
        </body>
        </html>
        `;
    }else{
        console.log('---------------')
        path = staticPath+path
        path = path.replace(/\\/g,"/");
        console.log(path)
        try {
            let data = fs.readFileSync(path, 'utf-8');
            console.log(data)
            if(data != ''){
                string = data
            }
        } catch (error) {
            //string = error
        }

    }
    respnse.end(string)
    return 0
}


