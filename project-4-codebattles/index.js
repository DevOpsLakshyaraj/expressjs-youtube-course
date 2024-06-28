const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const connectToMongo = require('./lib/db');
const app = express();
require('dotenv').config();

connectToMongo();

const PORT = 8080 || process.env.PORT;

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout'
}))
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    if (req.session.message) {
        res.locals.message = req.session.message;
        delete req.session.message;
    } else {
        res.locals.message = null;
    }
    next();
})

// Static files
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`CodeBattles listening on port ${PORT}`);
})
