const mongoose = require('mongoose');
const { generate_id } = require('../lib/utils');
const { Schema } = mongoose;

const URLSchema = new Schema({
    url: { type: String, required: true },
    shorten_id: { type: String, default: generate_id(8) }
}, { timestamps: true })

const Urls = mongoose.model('urls', URLSchema);
module.exports = Urls;
