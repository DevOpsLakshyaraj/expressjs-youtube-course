const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'posts'
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

const Comments = mongoose.model('comments', CommentSchema);

module.exports = Comments;
