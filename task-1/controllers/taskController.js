const Task = require("../models/taskModel");
const { getRequestBody } = require("../utils");

async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks.rows));

    } catch (error) {
        console.error(error);
    }
}

async function createTask(req, res) {
    try {   
        const body = await getRequestBody(req);
        const { taskDescription } = JSON.parse(body);

        const newTask = await Task.create(taskDescription);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTask));

    } catch (error) {
        console.error(error)
    }
}

async function getTask(req, res, id) {
    try {
        const task = await Task.findById(id);
        if(!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(task))
        }

    } catch (error) {
        console.log(error);
    }
}

async function updateTask(req, res, id) {
    try {
        const task = await Task.findById(id);

        if(!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task Not Found' }))
        } else {
            const body = await getRequestBody(req);
            const { taskDescription } = JSON.parse(body);

            const updatedTask = await Task.update(id, taskDescription);

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updatedTask)) 
        }
    } catch (error) {
        console.log(error)
    }
}

async function replaceTask(req, res, prevId) {
    try {
        const task = await Task.findById(prevId);

        if(!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task Not Found' }))
        } else {
            const body = await getRequestBody(req);
            const { ID, taskDescription } = JSON.parse(body);

            const replacedTask = await Task.replace(prevId, taskDescription, ID);

            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(replacedTask)) 
        }
    } catch (error) {
        console.log(error)
    }
}

async function deleteTask(req, res, id) {
    try {
        const task = await Task.findById(id);
        console.log(id);
        if(!task) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Task Not Found' }))
        } else {
            await Task.remove(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `Task with id=${id} was deleted` }));
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    replaceTask
}
