const mysql = require('mysql');

function newConnection () {
    let conn = mysql.createConnection({
        host : '35.225.142.106',
        user : 'root',
        password : 'password',
        database : 'UserDB'
    });
    return conn;
}

module.exports = newConnection;
