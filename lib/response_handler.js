var fs = require('fs');

var response_handler = function(res){
    this.res = res;
};

response_handler.prototype = {
    //store the node response object so we can operate on it
    res: {},

    serverError: function(code, content){
        var self = this;
        self.res.writeHead(code, {'Content-Type': 'text/plain'});
        self.res.end(content);
    },

    renderHtml: function(content) {
        var self = this;
        self.res.writeHead(200,{'Content-Type': 'text/html'});
        self.res.end(content, 'utf-8');
    },

    renderWebroot: function(requestedUrl) {
        var self = this;
        fs.readFile('./webroot' + requestedUrl, function(error, content){
            if (error){
                console.log(error.message);
                self.serverError(404,'404 Bad Request');
            }else{
                var extension = (requestedUrl.split('.').pop());
                self.res.writeHead(200, self.getHeadersByFileExtension(extension));
                self.res.end(content, 'utf-8');
            }
        });
    },

    getHeadersByFileExtension: function(extension){
        var self = this;
        var headers = {};

        switch(extension) {
            case 'html':  
                headers['Content-Type'] = 'text/html; charset=utf-8';
                break;
            case 'css':  
                headers['Content-Type'] = 'text/css';
                break;
            case 'js':  
                headers['Content-Type'] = 'application/javascript';
                break;
            case 'ico':  
                headers['Content-Type'] = 'image/x-icon';
                break;
            default:  
                headers['Content-Type'] = 'text/plain';
                break;
        }
        return headers;
    }
};

module.exports = response_handler;