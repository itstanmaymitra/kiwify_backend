const mysql = require("mysql2");

const pool = mysql
	.createPool({
		host: "sql12.freemysqlhosting.net",
		user: "sql12594933",
		password: "Un3yGEgnWm",
		database: "sql12594933",
		port: 3306,
	})
	.promise();

module.exports = pool;
