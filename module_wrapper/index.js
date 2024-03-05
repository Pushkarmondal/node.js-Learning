
//this code is protected because of iife:
(function () {
    const name1 = "Pushkar";
    console.log(name1);
})();

//web-server creation:
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("success");
})

server.listen(3000, "127.0.0.1", () => {
    console.log("hey");
});