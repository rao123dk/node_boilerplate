const mongoose = require('mongoose');
let config = require('../environments/env').config();
module.exports.connect = function(){
    mongoose.connect(config.DATABASE_URL,{ useNewUrlParser: true }, (err) =>{
    if(!err){
        console.log("Connected");
    }else{
        console.log('connection error', err);
    }

    });
}
