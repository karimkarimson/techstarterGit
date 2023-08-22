const { createPool } = require('mysql');
const pool = createPool({
    host: "database-url.com",
    user: "user",
    password: "password",
    database: "database",
    connectionLimit: 10
});

module.exports = pool;