const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    title:String,
    image:String,
    desc:String
});


var AuthorData = mongoose.model('authordata',AuthorSchema);

module.exports = AuthorData;