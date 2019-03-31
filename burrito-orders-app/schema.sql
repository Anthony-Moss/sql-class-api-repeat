create table burrito_orders (
    id serial PRIMARY key,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    type VARCHAR(50),
    contents VARCHAR(200),
    order_type VARCHAR(20),
    created TIMESTAMP
);