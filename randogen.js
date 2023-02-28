function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(11));
// Expected output: 0, 1 or 2

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);