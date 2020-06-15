var rp = require('request-promise');
var options = { uri : 'https://windsurf.grotto-networking.com/data/logs/windEvents2015.json',
headers: {
    'User-Agent': 'Request-Promise'
},
json: true
}
rp(options)
.then(function (obj) {
      
      console.log("Number of Sailing session in 2015 was :-   "+ obj.length);
      
      var firstmax = obj[1].max10sec;
      for(var i=0; i<obj.length; i++)
      {
        if(obj[i].max10sec > firstmax)
        {
        firstmax = obj[i].max10sec;
        }
      }
      console.log("The fastest 10 second speed average was :- " + firstmax);
      
      var maxdist = obj[1].distance;
      for(var i=0; i<obj.length; i++)
      {
        if(obj[i].distance > maxdist)
        {
        maxdist = obj[i].distance;
        }
      }
      console.log("The longest single day distance was :- " + maxdist);
      
      })
.catch(function (err) {
       console.log("Error :- " + err);
       });
