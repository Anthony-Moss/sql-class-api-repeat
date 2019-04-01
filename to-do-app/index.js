// todo app 
// there will be many to-dos
// each to-do will have a unique id, content(the to-do), date created, to-do completion date, status (pending, in-progress, completed), list_number
// you can add to-dos to your main list
// to-dos can be sorted into subcatagories by a list number or name/ID
//to-dos can also be deleted from the list
// to-dos can be changed to different lists
const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';

const port = 3000;

const toDos = require('./toDos');

const server = http.createServer(async (req, res) => {
    const method = req.method;
    const parts = req.url.split("/");
    console.log(req);

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');

    // if (req.url === "/") {
        console.log(req);
        if (method === "GET") {
            if (parts.length === 2) {
                const allToDos = await toDos.getAll();
                const toDoJSON = JSON.stringify(allToDos);
                res.end(toDoJSON);
            } else {
                res.status = 404;
                res.end('Resource not found');
            }
        }
    // }
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});


// coffee orders
// there will be many coffee orders
// each coffee order will have a unique id, size, type, orderer's name, orderer's email, date, customer id
// you can add coffee orders to the list
// you can delete coffee orders from the list



// burrito order
// same as coffee but burrittos not coffee



// books dataBASS
// there will be many books in the dataBASS
// each book will have a unique id, title, author, genre, rating


// music dataBASS
// there will be many many music in my dataBASS
// each of the many musics will have uniq id, title, album, artist, genre



// tv shows dataBASS
// im tired - same shit as above but with movies, some next level shit 
// its almost like this is getting easier after drowning the rest of the week trying to figure out what the hell was even going on


// movies dataBASE
// SUPRISE! its more of the same fucking thing swap in movie 


// comic book/anime dataBASE 
// and im just wasting my time at this point typing useless and obvious things which will be of no help to me whatsoever 



// cars dataBASE
// dude where's my car?


// clothes dataBASE
// clothes: type, color, size, outfit id 


// expenses dataBase
// if i havent gotten the picture by now...welp I had a good life 

