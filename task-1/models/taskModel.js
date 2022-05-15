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

async function update(id, taskDescription) {
    const updatedTask = await db.query(`UPDATE "tasks" SET "taskDescription"='${taskDescription}' WHERE "ID"=${id} RETURNING *`);
    return new Promise((resolve, reject) => {
        resolve(updatedTask.rows[0]);
    })
}

async function replace(prevID, taskDescription, ID) {
    const replacedTask = await db.query(`UPDATE "tasks" SET "ID"=${ID}, "taskDescription"='${taskDescription}' WHERE "ID"=${prevID} RETURNING *`);
    return new Promise((resolve, reject) => {
        resolve(replacedTask.rows[0]);
    })
}

async function remove(id) {
    await db.query(`DELETE FROM "tasks" WHERE "ID"=${id}`);
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    remove,
    replace
}
