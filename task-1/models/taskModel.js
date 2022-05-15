const db = require("../db");

async function findAll() {
    const tasks = await db.query(`SELECT * FROM "tasks"`);
    return new Promise((resolve, reject) => {
        resolve(tasks);
    })
}

async function create(taskDescription) {
    const newTask = await db.query(`INSERT INTO "tasks" ("taskDescription") VALUES ('${taskDescription}') RETURNING *`);
    return new Promise((resolve, reject) => {
        resolve(newTask.rows[0]);
    })
}

async function findById(id) {
    const task = await db.query(`SELECT * FROM "tasks" WHERE "ID"=${id}`);
    return new Promise((resolve, reject) => {
        resolve(task.rows[0]);
    })
}

module.exports = {
    findAll,
    create,
    findById
}
