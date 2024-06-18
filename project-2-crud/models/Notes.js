const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    noteDesc: {type: String, required: true},
    uuid: {type: String, default: crypto.randomUUID()}
}, {timestamps: true})

const Notes = mongoose.model('notes', noteSchema);

module.exports = Notes;
