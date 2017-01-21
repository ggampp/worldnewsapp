var fs = require('fs');
var url = require('url');
var response_handler = require('./response_handler');
var news = require('./news');

this.dispatch = function(req, res) {
    responseHandler = new response_handler(res);
    news_class = new news(req, res);
    
    if (req.url == "/") {
        responseHandler.renderWebroot('/index.html');    
    }else if (req.url == "/news"){
        news_class.renderNews();
    }else{
        responseHandler.renderWebroot(url.parse(req.url).href);
    }
}