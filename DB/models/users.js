const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name: { type: String, required: true },
    email : { type: String, required : true, index: { unique: true }  },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Users',UsersSchema);
