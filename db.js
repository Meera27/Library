const mongoose = require("mongoose");

// const DB = 'mongodb+srv://user1:user1@ictak-meera.d0obp.mongodb.net/LibraryApp?retryWrites=true&w=majority';
 const DB ='mongodb://localhost:27017/library';
const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to DB !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;