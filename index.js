const express = require('express');
const newConnection = require('./DBConnection');

const app = express();

app.use(express.static('static'));    

app.get('/users', (req, res) => {
    let conn = newConnection();
    conn.connect();

    let userList;

    conn.query(`SELECT * FROM Users`, (err, rows, fields) => {
        
        userList = rows;
        let content = ' ';
        let nTime1;
        let nTime2;
        let nTime3;
        let nTime4;
        let nTime5;
        let nTime6;
        let nTime7;
        let nTime8;
        let nTime9;
        let nTime10;
        
        for (u of userList) {
            if (u.Time1 == 'on')
                nTime1 = 'True';
            else
                nTime1 = 'False';

            if (u.Time2 == 'on')
                nTime2 = 'True';
            else
                nTime2 = 'False';

            if (u.Time3 == 'on')
                nTime3 = 'True';
            else
                nTime3 = 'False';

            if (u.Time4 == 'on')
                nTime4 = 'True';
            else
                nTime4 = 'False';

            if (u.Time5 == 'on')
                nTime5 = 'True';
            else
                nTime5 = 'False';

            if (u.Time6 == 'on')
                nTime6 = 'True';
            else
                nTime6 = 'False';

            if (u.Time7 == 'on')
                nTime7 = 'True';
            else
                nTime7 = 'False';

            if (u.Time8 == 'on')
                nTime8 = 'True';
            else
                nTime8 = 'False';

            if (u.Time9 == 'on')
                nTime9 = 'True';
            else
                nTime9 = 'False';

            if (u.Time10 == 'on')
                nTime10 = 'True';
            else
                nTime10 = 'False';

            content += '<div>';
            content += 'NAME : (' + u.Name + '), TIME SLOT AVAILABILITY : (' + nTime1 + ' | ' + nTime2 + ' | ' + nTime3 + ' | ' + nTime4 + ' | ' + nTime5 + ' | ' + nTime6 + ' | ' + nTime7 + ' | ' + nTime8 + ' | ' + nTime9 + ' | ' + nTime10 + ')';
            content += '</div>';
        }

        res.send(content);
    })

    conn.end();
});

app.use(express.urlencoded({
    extended: true
}))

app.get('/save-user', (req, res) => {
    let conn = newConnection();
    conn.connect();

    conn.query(`INSERT INTO Users VALUES ('${req.query.name}', '${req.query.t1}', '${req.query.t2}', '${req.query.t3}', '${req.query.t4}', '${req.query.t5}', '${req.query.t6}', '${req.query.t7}', '${req.query.t8}', '${req.query.t9}', '${req.query.t10}')`
    , (err, rows, fields) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/');
        }
    })

    conn.end();
})

app.post('/login', (req, res) => {
    let username = req.body.usr;
    let password = req.body.pwd;

    let message = 'Access Denied';

    if (username == 'admin' && password == 'password') {
        message = 'Welcome';
    }

    res.send(message);
})

app.listen(80);