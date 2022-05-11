const Task = require("../models/taskModel");

async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(tasks.rows))

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getTasks
}