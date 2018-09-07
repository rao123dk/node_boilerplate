const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const os = require('os');
const api = require('./route/api')
const app = express();
const config = require('./environments/env').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(function(req, res, next) {
  var allowedOrigins = ['http://localhost:4210', 'http://localhost:4200','exp://192.168.43.186:19000'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });


app.use('/', api);

//app.get('/api/sys', (req, res) => res.send({ username: os.userInfo().username }));


app.listen(8080, () => console.log('Listening on port 8080!'));
