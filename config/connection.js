var connection = require("mysql").createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SwimmingOtters357",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) console.error("error connecting: " + err.stack);
    else console.log("connected as id " + connection.threadId);
});

module.exports = connection;