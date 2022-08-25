const http = require("http");
const hostname = "localhost";
const port = 8080;
const a="hihih";
const server = http.createServer((req, res) =>{
    res.statuscode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(a);
});
server.listen(port,hostname,() =>{
    console.log('Server is running on localhost:',8080 );
});