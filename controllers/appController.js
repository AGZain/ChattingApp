var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser'); 


module.exports = function(app){

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(session({
    key:'user_login',
    secret:'login_secret',
    resave:false,
    saveUninitialized:false,
    cookie: {
      expires:600000
    }
  }));
  app.get('/',(req,res) =>{
    res.render('index');
  });

  app.route('/login')
    .get(function(req, res){
      res.render('login');
    })
    .post(function(req, res){
      var username = req.body.username;
      var password = req.body.password;
      if (username == "user" && password =="pass"){
        req.session.user = "user";
        res.redirect('/');
      }
    });
    

  
  
  // app.use(cookieParser());
  // app.use(session({
  //   key: 'user_login',
  //   secret: 'login_secret',
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: {
  //     expres:60000
  //   }
  // }));
  // app.use(function(req, res, next) {       // Catches access to all other pages
  //   if(!req.session.accessToken) {       // requiring a valid access token
  //       res.redirect('/login');
  //   } else {
  //       console.log("already logged in");
  //       next();
  //   }
  // });

//   app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false
//   }));
 }