var fs = require('fs');
var http = require('http');

var news = function (req, res) {
    this.req = req;
    this.res = res;
};

news.prototype = {

    res: {},

    req: {},

    renderNews: function (options) {
        var options = {
            host: 'newsapi.org',
            path: '/v1/articles?source=reuters&sortBy=top&apiKey=a88281bd9cd04d5aacc542124b4dca63'
        };
        var self = this;

        callback = function (response) {
            var str = '';
            var str = '';
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                var parsed = JSON.parse(str);
                
                self.res.writeHead(200,{'Content-Type': 'application/json'});
                self.res.end(str, 'utf-8');
            });
        }
        http.request(options, callback).end();
    }

};

module.exports = news;