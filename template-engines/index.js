const express = require('express');
const path = require('path');
// const pug = require('pug');
// const ejs = require('ejs');
const exphbs = require('express-handlebars');
const users = require('./users');
const { eq, count } = require('./config/hbs');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'base',
    helpers: { eq, count }
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    // res.send('Template Engine Tutorial - Pug')
    res.render('index', {
        title: 'Handlebars Template Engine',
        message: 'This is the ultimate tutorial on handlebars template engine',
        users,
        search: true
    })
})

app.listen(PORT, () => {
    console.log(`Tutorial app listening on port ${PORT}`)
})
