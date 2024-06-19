const express = require('express');
const connectToMongo = require('./lib/db');
const path = require('path');
const ejs = require('ejs');
const session = require('express-session');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(session({
    secret: 'keyboard cat', // store in .env file
    resave: false,
    saveUninitialized: false,
}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

connectToMongo()

// Middleware to flash messages
app.use((req, res, next) => {
    if (req.session.message) {
        res.locals.message = req.session.message;
        delete req.session.message;
    } else {
        res.locals.message = null;
    }
    next();
})

app.use('/', require('./routes/index'))
app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
    console.log(`CRUD App listening on port ${PORT}`)
})
