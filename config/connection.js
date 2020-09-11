var connection = require("mysql").createConnection({
    host: "z8dl7f9kwf2g82re.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "netxg6ya1hnzc2nf",
    password: "lxsklu5fy4606ulb",
    database: "mcqzrhl089dp6qkx",
    dialect: "mysql"
});

connection.connect((err) => {
    if (err) console.error("error connecting: " + err.stack);
    else console.log("connected as id " + connection.threadId);
});

module.exports = connection;