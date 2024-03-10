const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    //     var fs = require('fs');
    //     fs.readFile('input.txt', function (err, data) {
    //         if (err) return console.error(err);
    //         res.end(data.toString());
    //     })
    // })
    
//Streaming data/text: 
    const rStream = fs.createReadStream("input.txt");

    rStream.on('data', (chunk) => {
        res.write(chunk);
    });

    rStream.on('end', () => {
        res.end();
    })

});

server.listen(3000, "127.0.0.1");
