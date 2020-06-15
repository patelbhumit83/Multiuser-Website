const express = require('express');
const app = express();


app.get('/date', function (req, res) {
        res.send("Date and Time :-" + date());
        });


function date()
{ 
 var dt = new Date();
 return dt;

}






host = '127.0.0.18';
port = '2000';

app.listen(port, host, function () {
           console.log(`Date and Time app listening on IPv4: ${host}:${port}`);
           });

