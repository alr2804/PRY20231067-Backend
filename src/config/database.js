const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_MONGO_URL || `mongodb://localhost/pry20231067`)
    .then(()=> {
        console.log('Connected to database succesfully!')
    }).catch((err)=> {
        console.log('Error with database: ', err);
    })

module.exports = mongoose;