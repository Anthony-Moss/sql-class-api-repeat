create table toDos (
    id serial PRIMARY key,
    content varchar(200),
    created Date,
    due varchar(50),
    status varchar(20)
);
