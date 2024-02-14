const http = require('http');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
});

server.listen(port, hostname, () => { 
   
});
