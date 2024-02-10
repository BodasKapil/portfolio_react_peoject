var fs = require('fs');
var http = require('http');
try {  
    var data = fs.readFileSync('file.txt', 'utf8');
    console.log("Hello")
    console.log(data.toString());    
} catch(e) {
    console.log('Error:', e.stack);
}

http.createServer(function (req, res) {
  fs.readFile('file.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
}).listen(3000);