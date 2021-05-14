const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fname :String,
    lname :String,
    uname :{type:String,unique:true},
    phone :Number,
    email :String,
    pwd   :String,
});

var UserData = mongoose.model('userdata',UserSchema);

module.exports = UserData;