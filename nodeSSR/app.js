const reactSsr = require('./dist/src/ssr/middlewares/react-ssr').default;
const Koa = require('koa');
const koaStatic = require('koa-static');
const path = require('path');
const app = new Koa();
app.use(koaStatic(path.join(__dirname,'./dist/static')))
app.use(reactSsr);
app.listen(9001);
console.log('react ssr is start 9001')