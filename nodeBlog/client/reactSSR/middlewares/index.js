
var url =require("url"); //引入url模块
let fs = require("fs")

import React from  'react';
import {StaticRouter,Route} from 'react-router-dom';
import App from '../../router/index';
import routeList from '../../router/router-config';
import {renderToString} from 'react-dom/server';

let staticPath = __dirname+"\\..\\static"

export default (req,res) => {
    let path = url.parse(req.url).pathname;
    let string = "nothing"
    if(path === '/favicon.icon') return;
        const html = renderToString(<StaticRouter location={path}>
            <App routeList={routeList}></App>
        </StaticRouter>)
        string = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>dd</title>
        </head>
        <body>
            <div id='root'>${html}</div>
            <script type="text/javascript" src="index.js"></script>
        </body>
        </html>
        `;
    res.end(string)
    return 0
}


