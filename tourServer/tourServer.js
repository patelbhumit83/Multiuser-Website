const express = require('express');
let app = express();
const bcrypt = require('bcryptjs');

var fs = require('./tours.json');
var hashuser = require('./userTourHash.json');
var usr = require('./usersTours.json');
var tourdb = require('./tourDBRef.js');
var userdb = require('./userDBRef.js');
var resuser = [];


var session = require('express-session');
const cookieName = "nt2955";
app.use(session({

    secret: 'website development CSUEB from Bhumit Patel',
    resave: false,
    saveUninitialized: false,
    name: cookieName
  }));

  const setUpSessionMiddleware = function (req, res, next) {

    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};
app.use(setUpSessionMiddleware);

const checkAdminMiddleware = function (req, res, next) {

    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};

app.set("json spaces", 2)
app.post('/tours', checkAdminMiddleware, express.json(), function(req, res)
     {
         var tour = req.body;
         tourdb.insert(tour).then(function(newDocs) {
         res.send(newDocs);
       });
         });

app.get('/', function(req,res)
        {
        res.send(fs);
        })

app.get('/tours/:id', function(req,res){
  var id = req.params["id"];
  tourdb.findOne({_id:id}).then(function(tour){
    if(!tour)
    {res.status(401)}
    else {
    res.status(200).send(tour);
    }

  })
})

app.get('/tours', async function(req, res) {
  var toursData = await tourdb.find({});
  res.json(toursData);
        });



app.post('/login', express.json(), async function(req, res)
                {

                  try{
                    email=req.body.email;

                    userdb.findOne({email: email}).then(function(authuser){
                      if(!authuser){
                        res.status(401).json({erro : true, message : "User email error"});
                        return;
                      }

                      var verify = bcrypt.compareSync(req.body.password, authuser.password);
                      console.log(verify);
                      if(verify){
                        var old = req.session.user;
                        req.session.regenerate(function(err){
                          if(err) {console.log(err);}
                          var newusr = Object.assign(old, authuser);
                          delete newusr.password;
                          req.session.user = newusr;
                          res.json(newusr);
                        });
                      }
                      else {
                          res.status(401).json({error:true, message:"User Password error"});
                      }
                      });
                    } catch(e) {console.log("Error" +e);}
          });


 app.get('/tourcount', async function(req, res){
   res.setHeader('Content-Type', 'application/json');

    tourdb.count({}).then(function(cnt){
       res.json(cnt);
   });
 });

 app.delete('/tours/:id',checkAdminMiddleware,express.json(),function(req,res){

  var id = req.params["id"];
  console.log(`${id}`);
  tourdb.remove({_id:id}).then((docs)=>{
    console.log("tour removed" + docs);
  });
  res.status(200).send({"message" : "error"});

})

  app.get('/logout', function(req, res){
    console.log("After logout Cookies");
    var ck = req.session.cookie;
    req.session.destroy(function(err){
      if(err) {console.log(err);}
      res.clearCookie(cookieName, ck);
      res.json({message:"GoodBye"});
    });
  });





module.exports = app;
