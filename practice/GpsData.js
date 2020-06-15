var rp = require('request-promise');
var options = { uri : 'https://windsurf.grotto-networking.com/data/tracks/track_2015_10_11.json',
headers: {
    'User-Agent': 'Request-Promise'
},
json: true
}

rp(options)
.then(function (obj) {
      console.log("The Start time of track_2015_10_11 was " + obj.start_time);
      
      var st = obj.start_time;
      var sailinglength = (obj.points.length)/60;
      console.log("The session lasted " + sailinglength + " minutes");
      
      
      
      })
.catch(function (err) {
       console.log("Error :- " + err);
       });

