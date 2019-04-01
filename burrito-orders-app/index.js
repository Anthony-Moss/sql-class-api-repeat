const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const Burrito_orders = require('./burrito_orders');

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const parts = req.url.split("/");

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (method === "GET") {
        if (parts.length === 2) {
            const allBurritoOrders = await Burrito_orders.getAll();
            const OrdersJson = JSON.stringify(allBurritoOrders);
            res.end(OrdersJson);
        } else if (parts.length === 3) {
            const orderId = parts[2];
            const theOrder = await Burrito_orders.getById(orderId);
            const orderJSON = JSON.stringify(theOrder);
            res.end(orderJSON);
        } else {
            res.status = 404;
            res.end('Resource not found.');
        }
    } else {
        res.end(`{
            message: "Thank you for your patronage. Please send bitcoin.
        }`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});