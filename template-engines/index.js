const express = require('express');
const path = require('path');
const pug = require('pug');
const users = require('./users');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    // res.send('Template Engine Tutorial - Pug')
    res.render('index', {
        title: false,
        message: 'This is the ultimate tutorial on pug template engine',
        users
    })
})

app.listen(PORT, () => {
    console.log(`Tutorial app listening on port ${PORT}`)
})
