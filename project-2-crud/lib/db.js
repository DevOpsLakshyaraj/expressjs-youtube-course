const mongoose = require('mongoose');
require('dotenv').config()

const connectToMongo = async () => {
    await mongoose.connect(process.env.NODE_ENV === 'development' ? process.env.DEV_MONGO_URI : process.env.PROD_MONGO_URI)
    console.log('Connection successfull!')
}

module.exports = connectToMongo;
