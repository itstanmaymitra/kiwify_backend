const mysql = require("mysql2");

const pool = mysql
	.createPool({
		host: "sql10.freesqldatabase.com",
		user: "sql10597916",
		password: "T4QGFfNDCq",
		database: "sql10597916",
		port: 3306,
	})
	.promise();

module.exports = pool;
