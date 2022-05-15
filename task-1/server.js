const http = require("http");
require("dotenv").config();
const { getTasks, createTask, getTask } = require('./controllers/taskController')

const server = http.createServer((req, res) => {
    if(req.url === "/tasks" && req.method === "GET"){
        getTasks(req, res);
    } else if (req.url === "/tasks" && req.method === "POST"){
        createTask(req, res);
    }else if(req.url.match(/\/tasks\/\w+/) && req.method === 'GET') {
        const id = req.url.split('/')[2];
        getTask(req, res, id);
    }
    else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({message: "Route doesn't exist"}));
    }   
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
