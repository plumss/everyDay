const React = require('react');
const http = require('http');
import HomePage from '../../client/pages/homePage';
const {renderToString} = require('react-dom/server');
export default (ctx,next)=>{
    const html = renderToString(<HomePage />)
    ctx.body=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ssr</title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script src="index.js"></script>
    </body>
    </html>`;
    return next();
}