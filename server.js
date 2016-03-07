var http = require('http');
var url = require('url');

var stocks = [];
var index = 0;
setInterval(function () {
  var timestamp = new Date ().getTime();
  stocks.push ({
    timestamp: timestamp,
    index: index ++,
    stocks: {
      NASDAQ: Math.random() * 15.0,
      CAC40: Math.random() * 145
    }
  });
}, 1000);

function tail (count) {
  if (count <= 0)
    return stocks;

  if (stocks.length <= count)
    return stocks;

  return stocks.slice (-count);
}

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var query = url.parse(request.url, true).query;
  var count = query.count ? query.count - 0 : 0;
  response.end (JSON.stringify(tail (count)));
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");