
const mongoose = require('mongoose')
var mongoDB = 'mongodb+srv://testproject:testproject@cluster0.errt96s.mongodb.net/student_detail'
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
});

let db = mongoose.connection;
db.once('open', () => {
    console.log("connection established with db");
});

