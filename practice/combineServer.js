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

app.get('/netID', function (req, res) {
        res.send("Name :- Bhumit Patel NetId :- nt2955");
        });



host = '127.0.0.20';
port = '4000';

app.listen(port, host, function () {
           console.log(`Combine Server app listening on IPv4: ${host}:${port}`);
           });

