const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
    post: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'posts'
    },
    parent: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'comments'
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    comment: {
        type: String,
        required: true
    }
}, {timestamps: {
    updatedAt: false
}})

const Replies = mongoose.model('replies', ReplySchema);

module.exports = Replies;
