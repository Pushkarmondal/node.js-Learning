const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    const rStream = fs.createReadStream("text.txt");
    rStream.pipe(res);
});
server.listen(3000, "127.0.0.1");
