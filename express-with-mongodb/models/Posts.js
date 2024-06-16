const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String, // String is shorthand for {type: String}
    tagline: String,
    content: String,
    slug: String
});

const Posts = mongoose.model('posts', postSchema);

module.exports = Posts;
