const express = require("express");
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
let config = require('./../environments/env').config();

//DB
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connection = require('./../DB/connection.js');
router.use(cors());
router.use(bodyParser.json());

//
//Schemas
var User = require('./../DB/models/users');

//@@ DB connection
connection.connect();
let db = mongoose.connection;

router.get("/hi", async (req, res) => {
   //res.send("hi");
   await User.find({},(err,User)=>{
    if(err) throw err;
    res.json(User);
   })
});


router.get("/save", function(req, res){
    const user_info = {
      "name" : "test",
      "email" : "test@gmail.com",
      "password" : "ddddd"
     }
     var user = new User(user_info);
     user.save((err, result)=>{
       if(err){
         console.log(err);
       }
       res.sendStatus(200);
     })

   })

module.exports = router;