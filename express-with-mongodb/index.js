const express = require('express');
const connectToMongo = require('./lib/db');
const path = require('path');
const ejs = require('ejs');
const Posts = require('./models/Posts');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

connectToMongo()

app.get('/', async (req, res) => {
    const posts = await Posts.find()
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.render('index', {posts: posts})
})

app.get('/post/:id', async (req, res) => {
    const post = await Posts.findById(req.params.id)
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.render('post', {post: post})
})

app.listen(PORT)
