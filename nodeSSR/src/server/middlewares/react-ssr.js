import React from  'react';
import Index from '../../client/pages/Index';
import {renderToString} from 'react-dom/server';
export default (ctx,next) => {
    console.log('ctx.request.path', ctx.request.path);
    console.log('ctx.request.url', ctx.request.url);
    const html = renderToString(<Index />)
    ctx.body = `<!DOCTYPE html>
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
    return next();
}