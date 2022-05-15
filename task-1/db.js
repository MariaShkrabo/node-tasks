const Pool = require("pg").Pool;
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "2516609",
    port: 5432,
    database: "todo",
});

module.exports = pool;
