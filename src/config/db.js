const mysql2 = require("mysql2/promise");

const dbOptions = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "students_db",
};

const pool = mysql2.createPool(dbOptions);

module.exports = pool;
