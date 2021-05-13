//Accessing Mongose package
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/library');
// mongoose.connect('mongodb+srv://user1:user1@ictak-meera.d0obp.mongodb.net/LibraryApp?retryWrites=true&w=majority')


//Schema definition
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title :String,
    genre : String,
    author : String,
    image : String,
    desc:String
}); 

//Model Creation
var Bookdata = mongoose.model('bookdata',BookSchema);
// (collection name,schema)

module.exports = Bookdata; 