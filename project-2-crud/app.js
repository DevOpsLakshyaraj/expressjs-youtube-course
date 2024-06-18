const express = require('express');
const connectToMongo = require('./lib/db');
const path = require('path');
const ejs = require('ejs');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

connectToMongo()

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`CRUD App listening on port ${PORT}`)
})
