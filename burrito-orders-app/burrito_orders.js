const db = require('./conn');

class Burrito_order {
    constructor(id, first_name, last_name, type, contents, order_type, timestamp) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.type = type;
        this.contents = contents;
        this.order_type = order_type;
        this.timestamp = timestamp;
    }

    static getAll() {
        return db.any(`select * from burrito_orders`)
        .then((arrayOfOrders) => {
            return arrayOfOrders.map((ordersData) => {
                const anOrder = new Burrito_order(ordersData.id, ordersData.first_name, ordersData.last_name, ordersData.type, ordersData.contents, ordersData.order_type, ordersData.timestamp);
                return anOrder;
            });
        });
    };
}

module.exports = Burrito_order;