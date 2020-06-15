var rp = require('request-promise-native');
var options = { uri : 'http://localhost:12345/tours/add',
headers: {
    'User-Agent': 'Request-Promise'
},
    method : "POST",
    body : {"name":"asca","date":"dc","type":"virtual_tour"},
json: true
}


let cookiejar = rp.jar();

let addTour = {
    uri: 'http://127.0.0.1:12345/tours/add',
    json: true,
    method: "POST",
    body: {
        name: "Windsurf K2-18b, 110 Light Years",
        date: "Sometime in 2025",
        type: "virtual_tour"
    },
    jar: cookiejar
};

let loginOptions = {
    uri: 'http://127.0.0.1:12345/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sided1830@outlook.com",
        "password": "C}m8\"L,F"
    },
    jar: cookiejar
}

let loginCust = {
    uri: 'http://127.0.0.1:12345/login',
    json: true,
    method: "POST",
    body: { // admin user, see users.json file
        "email": "sylvan2059@live.com",
        "password": "1wQX_lYt"
    },
    jar: cookiejar
}

var tourcnt = {
  uri : 'http://127.0.0.1:12345/tourcount',
  method : "GET",
  json : true,
  resolveWithFullResponse: true,
  jar : cookiejar
}

let logoutoption = {
    uri: 'http://localhost:12345/logout',
    method: 'GET',
    resolveWithFullResponse: true,
    jar : cookiejar
};

async function someTests() {

  console.log("Test 1,Admin login add tour")
  try {
      let res2 = await rp(loginOptions);
      console.log(`login results: ${JSON.stringify(res2)}`);
      console.log(`\n After Admin login Cookie: ${cookiejar.getCookieString(loginOptions.uri)}`);
      var cnt = await rp(tourcnt);
      console.log("\nadmin visit, number of tours :- " + JSON.stringify(cnt.body));
      let res3 = await rp(addTour);
      var cnt = await rp(tourcnt);
      console.log("\nAdmin Add tour, number of tours :- " +JSON.stringify(cnt.body)) ;
      var logout = await rp(logoutoption);
      console.log("After Logout, Cookies" + cookiejar.getCookieString(logoutoption.uri));
  } catch (e) {
      console.log(`Error: ${e}\n`);
  }

  console.log("\nTest :- 2, Customer add tour");
    try {
        let res4 = await rp(loginCust);
        console.log(`Customer login test result :- ${JSON.stringify(res4)}`);
        console.log(`\nAfter Customer login, Cookie: ${cookiejar.getCookieString(loginOptions.uri)}`);
        var cnt = await rp(tourcnt);
        console.log("\nCustomer visit, number of tours :- " + JSON.stringify(cnt.body));
        let res5 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(res5)}\n`);
    } catch (e) {
        console.log(`Customer add tour Error : ${e}\n`);
    }

    console.log("\nTest :- 3 Guest Add tour");
    try {
      var cnt = await rp(tourcnt);
      console.log("\nGuest visit, number of tours :- " + JSON.stringify(cnt.body));
      console.log("\nAfter Guest visit, Cookies" + cookiejar.getCookieString(tourcnt.uri));
        let res1 = await rp(addTour);
        console.log(`Add Tour result: ${JSON.stringify(response)}`);
    } catch (e) {
        console.log(`\nGuest Add tour error :- ${e}\n`);
    }


}

someTests();
