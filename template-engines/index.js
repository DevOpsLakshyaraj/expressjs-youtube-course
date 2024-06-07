const express = require('express');
const path = require('path');
// const pug = require('pug');
const ejs = require('ejs');
const users = require('./users');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    // res.send('Template Engine Tutorial - Pug')
    res.render('index', {
        title: 'EJS Template Engine',
        message: 'This is the ultimate tutorial on pug template engine',
        users,
        search: true
    })
})

app.listen(PORT, () => {
    console.log(`Tutorial app listening on port ${PORT}`)
})
