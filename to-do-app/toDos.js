const db = require('./conn');

class toDo {
    constructor(id, content, created, due, status){
        this.id = id;
        this.content = content;
        this.created = created;
        this.due = due;
        this.status = status;
    }

    // static add(toDoData){
    //     return db.one(`
    //     insert into toDo
    //             (content, due, status)
    //     values
    //         ($1, $2, $3)
    //         returning id
    //     `, [toDoData.content, toDoData.due, toDoData.status])
    //     .then((data) => {
    //         console.log('you added a to-do!, good job!');
    //         console.log(`new to-do id is ${data.id}`);
    //         return data.id;
    //     })
    // }
    static getAll() {
        return db.any(`select * from toDos`)
        .then((arrayOfToDos) => {
            return arrayOfToDos.map((toDoData) => {
                const aToDo = new toDo(toDoData.id, toDoData.content, toDoData.created, toDoData.due, toDoData.status);
                return aToDo;
            });
        });
    };

    static update(id, orderData) {
        return db.result(`
            update orders
            set first_name = $1, last_name = $2, email = $3, coffee_order = $4
            where id=$5
        `, [orderData.first_name, orderData.last_name, orderData.email, orderData.coffee_order, id]);
            // .then((data) => {
            //     return data.id;
            // });
    }
}

module.exports = toDo;