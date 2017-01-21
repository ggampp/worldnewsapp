var http    = require('http');
var url     = require('url');

var dispatcher = require('./lib/dispatcher.js');

http.createServer(function(req, res){
    try{
        console.log('Incoming Request for href: ' + url.parse(req.url).href);
        dispatcher.dispatch(req, res);
    }catch(err){
        console.log(err);
        res.writeHead(500);
        res.end('Internal Server Error');
    }
}).listen(process.env.PORT || 5000, function(){
    console.log('Server running at http://127.0.0.1:'+ (process.env.PORT || 5000) +'/');
});