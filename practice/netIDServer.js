const express = require('express');
const app = express();


app.get('/netID', function (req, res) {
        res.send("Name :- Bhumit Patel NetId :- nt2955");
        });




host = '127.0.0.19';
port = '3000';

app.listen(port, host, function () {
           console.log(`Net ID and Name app listening on IPv4: ${host}:${port}`);
           });

