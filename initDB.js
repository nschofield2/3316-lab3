const mysql = require('mysql');

    let conn = mysql.createConnection({
        host : '35.225.142.106',
        user : 'root',
        password : 'password',
        database : 'UserDB'
    });

conn.connect();


conn.query('DROP TABLE Users', (err, rows, fields) => 
{
    if (err)
        console.log(err);
    else
        console.log("Table Dropped!");
});


conn.query('CREATE TABLE Users (Name varchar(20), Time1 varchar(10), Time2 varchar(10), Time3 varchar(10), Time4 varchar(10), Time5 varchar(10), Time6 varchar(10), Time7 varchar(10), Time8 varchar(10), Time9 varchar(10), Time10 varchar(10)); '
, (err, rows, fields) => 
{
    if (err)
        console.log(err);
    else
        console.log("Table Created!");
});

conn.end();