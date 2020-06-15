var rp = require('request-promise-native');

var ckjar = rp.jar();
var options = { uri : 'http://localhost:1234/login',
headers: {
    'User-Agent': 'Request-Promise'
},
    method : "POST",
    body : {"email":"sided1830@outlook.com","password":"C}m8\"L,F"},
json: true,
    resolveWithFullResponse: true,
    jar : ckjar
};

let site1 = {
    uri: 'http://localhost:1234/tours',
    method: 'GET',
    resolveWithFullResponse: true,
    jar : ckjar
};

let site2 = {
    uri: 'http://localhost:1234/logout',
    method: 'GET',
    resolveWithFullResponse: true,
    jar : ckjar
};

var site3 = { uri : 'http://localhost:1234/login',
headers: {
    'User-Agent': 'Request-Promise'
},
    method : "POST",
    body : {"email":"BadEmail@login.com","password":"C}m8\"L,F", "value":"email"},
    json: true,
    resolveWithFullResponse: true,
    jar : ckjar
};

var site4 = { uri : 'http://localhost:1234/login',
headers: {
    'User-Agent': 'Request-Promise'
},
    method : "POST",
    body : {"email":"sided1830@outlook.com","password":"C}m8\"L,", "value":"email"},
json: true,
    resolveWithFullResponse: true,
    jar : ckjar
};


async function some()
{
  try{
  console.log("Login Test 1 :- GOOD LOGIN\n Tours Called");
  var tour = await rp(site1);
  console.log("Cookies "  + ckjar.getCookieString(site1.uri));
  var login = await rp(options);
  console.log("Good Login Result");
  console.log(login.body);
  console.log("\n");
  console.log("After Good Login Cookie " + ckjar.getCookieString(options.uri));
  var logout = await rp(site2);
  console.log("\nAfter Logout Cookies " + ckjar.getCookieString(site2.uri));
} catch(e) { console.log(e);}


  console.log("\n Login Test 2 :- Bad Email\n");
  var tour = await rp(site1);
  console.log("Called Tour, Cookies " + ckjar.getCookieString(site1.uri));
  try {
    var login = await rp(site3);
  }catch(e) { console.log("Bad Email Login error :- " +e.message);}
  console.log("After login test 2 Cookies " + ckjar.getCookieString(site3.uri));

  console.log("\n Login Test 3 :- Bad Password");
  try{
    var login = await rp(site4);
  }catch(e){console.log("\n Bad Password login error :- " + e.message);}

  console.log("\n Aftere Test 3, Cookies " + ckjar.getCookieString(site4.uri));


}
some();
