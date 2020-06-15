var rp = require('request-promise');
var options = { uri : 'http://localhost:12345/tours',
headers: {
    'User-Agent': 'Request-Promise'
},
json: true
}
rp(options)
.then(function (obj) {
      
      var vt = obj.virtual_tour;
      var pt = obj.physical_tour;
      
      console.log("VIRTUAL TOUR");
      
      for(var i=0; i<obj.virtual_tour.length; i++){
      
      console.log("Tour " + (i+1) + " Name: " + obj.virtual_tour[i].name + ", Date: " + obj.virtual_tour[i].date);
      
      }
      
      console.log("PHYSICAL TOUR");
      for(var i=0; i<obj.physical_tour.length; i++){
      
      console.log("Tour " + (i+1) + " Name: " + obj.physical_tour[i].name + ", Date: " + obj.physical_tour[i].date );
      
      }
      
      })
.catch(function (err) {
       console.log("Error :- " + err);
       });

