const http = require("http");
//require("dotenv").config();
const { getTasks } = require('./controllers/taskController')

const server = http.createServer((req, res) => {
    if(req.url === "/tasks" && req.method === "GET"){
        getTasks(req, res);
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({massage: "Route doesn't exist"}));
    }
    
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));