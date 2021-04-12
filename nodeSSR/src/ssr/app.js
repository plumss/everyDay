// const React = require('react');
// class Index extends React.Component{
//     render(){
//         return <h1 onClick={()=>{console.log('sajjfjjfj')}}>das</h1>
//     }
// }


// const http = require('http');
// const {renderToString} = require('react-dom/server');
// http.createServer((req,res)=>{
//     res.writeHead(200,{
//         'Content-type':'text/html'
//     })
//     const html = renderToString(<Index />)
//     res.end(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>ssr</title>
//     </head>
//     <body>
//         <div id="root">${html}</div>
//         <script src="index.js"></script>
//     </body>
//     </html>`)
// }).listen(9001)