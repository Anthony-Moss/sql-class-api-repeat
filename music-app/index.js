const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (res, req) => {
    const method = req.method;
    const parts = req.url.split('/');

    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'application/JSON');

    // if (method === "GET")
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});