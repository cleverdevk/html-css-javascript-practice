const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.USER);

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "employees",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const data = pool.query("select * from employees");
console.log(data);
module.exports = {pool};