const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
}, {timestamps: {
    updatedAt: false
}})

const Contacts = mongoose.model('contacts', ContactSchema);

module.exports = Contacts;
