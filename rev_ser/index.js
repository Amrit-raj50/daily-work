// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.method === "GET" && req.url === "/") {
//         // console.log(req.headers.host);
//         // console.log(req.headers["user-agent"]);
//         // console.log(req.headers.accept);
//         // console.log(req.headers["content-type"]);
//         res.writeHead(200, {
//             "content-type": "application/json"
//         })
//         res.end(JSON.stringify({
//             message: "Success"
//         }));
//     } else if (req.method === "POST" && req.url === "/users") {
//         let body = "";

//         req.on("data", chunk => {
//             console.log(chunk);
//             body += chunk.toString();
//         });
//         req.on("end", () => {
//             try{
//                 const parsed = JSON.parse(body);
//                 console.log("Parsed Data : " , parsed);

//                 res.writeHead(201 , {"content-type" : "application/json"});
//                 res.end(JSON.stringify({message : "User created" , data : parsed}));
//             } catch (err){
//                 res.statusCode = 400;
//                 res.end("Invalid JSON format");
//             }
//         });


//     } else {
//         res.statusCode = 404;
//         res.end("Route not found");
//     }
// })

// // const PORT = 3000;

// server.listen(3000, () => {
//     console.log("Server is running on 3000");
// })


const http = require("http");//including http module
const { json } = require("stream/consumers");

let users = [
    { id: 1, name: "Amrit", age: 20 },
    { id: 2, name: "Raj", age: 22 }
];

const server = http.createServer((req, res) => { // creating server


    if (req.method === "GET" && req.url === "/api/message") { // GET route for /api/message
        res.writeHead(200, ({ "content-type": "Application/json" }));
        res.end(JSON.stringify({ message: "Hello World!" }));
    } else if (req.method === "POST" && req.url === "/api/users") { // POST route for /api/users 
        let body = "";

        req.on("data", chunk => {
            console.log(chunk);
            body += chunk.toString();
        })
        // res.writeHead(201, { "content-type": "application/json" });
        // res.end(JSON.stringify({ message: "User created"}));

        req.on("end" , () =>{
            console.log(body);

            res.end("Data recieved");
        })
    } else if(req.method === "PUT" && req.url.startsWith === "/api/id/"){
        const id = Number(req.url.split("/")[2]);

        let body = "";

        req.on("Data", (chunk) => {
            body += chunk.toString();
        })

        req.on("end",()=>{
            const updateUser = JSON.parse(body);

            const index = users.findIndex(id => use) 
        })
    }
    else {            // GET route for /
        res.statusCode = 200;
        res.end("Server is running !!!!");
    }
})

server.listen(3000, () => {
    console.log("Server is running 3000");
})