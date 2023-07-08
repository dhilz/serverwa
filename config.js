var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "lokalhost",
	    user: "username",
	    password: "password",
	    database: "db_name",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 
