const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const {ensureGuest, ensureAuth} = require('./lib/middlewares');
const app = express();

const PORT = 8080 || process.env.PORT;

app.engine('hbs', exphbs.engine({ extname: 'hbs' }))
app.set('view engine', 'hbs')

app.use(cookieParser())

app.use((req, res, next) => {
    if (req.cookies['name']) {
        res.locals.name = req.cookies['name'];
    } else {
        res.locals.name = null;
    }
    res.locals.title = 'Express Middlewares';
    next();
})

app.get('/', ensureGuest, (req, res) => {
    // res.send('Hello World!')
    res.render('index')
})

app.get('/about', ensureAuth, (req, res) => {
    // res.send('Hello World!')
    res.render('about')
})

app.listen(PORT)
