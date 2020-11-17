
const React = require('react');
class Index extends React.Component{
    render(){
        return(<h1 onClick={()=>{alert('一起啊来玩react ssr 塞')}}>hello word</h1>)
    }
}

const http = require('http');
const {renderToString} = require('react-dom/server');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    const html = renderToString(<Index />);
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <div id='root'>${html}</div>
    </body>
    </html>`)
}).listen(9001);