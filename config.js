var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "127.0.0.1",
	    user: "server",
	    password: "Dilz240899",
	    database: "server",
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