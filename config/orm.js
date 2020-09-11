const connection = require("./connection");

const orm = {
    create: (tableName, objectData, completed) => {
        let queryString = `INSERT INTO ?? (
            ${Object.keys(objectData).map(() => "??").join(", ")}
        ) VALUES (
            ${Object.keys(objectData).map(() => "?").join(", ")}
        );`;

        let values = [];
        
        values.push(...Object.keys(objectData).map(x => x));
        values.push(...Object.keys(objectData).map(x => objectData[x]));

        let query = connection.query(queryString, [tableName, ...values], completed);

        console.log(query.sql);
    },
    getAll: (tableName, completed) => {
        connection.query("SELECT * FROM ??;", [tableName], completed);
    },
    update: (tableName, object, completed) => {
        let queryString = `UPDATE ??
        SET ${Object.keys(object).map(() => "?? = ?").join(", ")}
        WHERE ? = \`id\`;`;

        let result = [tableName];
        
        Object.keys(object).map(key => 
            result.push(...[key, object[key]]));
        
        result.push(object.id);

        let query = connection.query(queryString, result, completed);

        console.log(query.sql);
    },
};

module.exports = orm;