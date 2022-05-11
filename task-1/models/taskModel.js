const db = require("../db");

async function findAll() {
    const tasks = await db.query("SELECT * FROM tasks");
    return new Promise((resolve, reject) => {
        resolve(tasks)
    })
}

module.exports = {
    findAll
}