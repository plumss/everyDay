import proConfig from '../../share/pro.config';
const port = proConfig.nodeServerPort || process.env.PORT;
import rotor from '../middlewares/rotor'
var http = require("http");
var server = http.createServer(function (request,respnse) {
    rotor(request,respnse)
});
 
server.listen(port);





















