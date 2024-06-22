const mongoose = require('mongoose');

const connectToMongo = async () => {
    await mongoose.connect('mongodb://localhost:27017/iurls-youtube')
    console.log('Connected to database: ' + mongoose.connection.host)
}

module.exports = connectToMongo;
