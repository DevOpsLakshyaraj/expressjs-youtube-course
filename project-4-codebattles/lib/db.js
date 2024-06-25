const mongoose = require('mongoose');
require('dotenv').config()

const connectToMongo = async () => {
    await mongoose.connect(process.env.NODE_ENV === 'development' ? process.env.MONGO_DEV_URI : process.env.MONGO_PROD_URI)
    console.log('Connection successfull!')
}

module.exports = connectToMongo;