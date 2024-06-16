const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/expressjs-with-mongodb')
    console.log('Connection successfull!')
}

module.exports = connectToMongo;
