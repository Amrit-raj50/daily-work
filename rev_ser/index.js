const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        // console.log(req.headers.host);
        // console.log(req.headers["user-agent"]);
        // console.log(req.headers.accept);
        // console.log(req.headers["content-type"]);
        res.writeHead(200, {
            "content-type": "application/json"
        })
        res.end(JSON.stringify({
            message: "Success"
        }));
    } else if (req.method === "POST" && req.url === "/users") {
        let body = "";

        req.on("data", chunk => {
            console.log(chunk);
            body += chunk.toString();
        });
        req.on("end", () => {
            try{
                const parsed = JSON.parse(body);
                console.log("Parsed Data : " , parsed);

                res.writeHead(201 , {"content-type" : "application/json"});
                res.end(JSON.stringify({message : "User created" , data : parsed}));
            } catch (err){
                res.statusCode = 400;
                res.end("Invalid JSON format");
            }
        });


    } else {
        res.statusCode = 404;
        res.end("Route not found");
    }
})

// const PORT = 3000;

server.listen(3000, () => {
    console.log("Server is running on 3000");
})