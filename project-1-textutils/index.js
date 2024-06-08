const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

const PORT = 8080 || process.env.PORT;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    // res.status(200).send('Textutils Project');
    res.status(200).render('index')
})

app.get('/analyzed', (req, res) => {
    // res.status(200).send('Textutils Project');
    res.status(200).render('analyzed')
})

app.listen(PORT, () => {
    console.log(`TextUtils listening on port ${PORT}`)
})
