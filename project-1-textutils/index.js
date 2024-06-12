const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

const PORT = 8080 || process.env.PORT;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    // res.status(200).send('Textutils Project');
    res.status(200).render('index')
})

app.post('/analyzed', (req, res) => {
    // res.status(200).send('Textutils Project');
    const text = req.body.textInput;
    const purpose = req.body.analyzeAction;
    let analyzedText = "";

    if (purpose === "toUpperCase") {
        analyzedText = text.toUpperCase();
    }
    if (purpose === "toLowerCase") {
        analyzedText = text.toLowerCase();
    }
    if (purpose === "removeExtraSpaces") {
        analyzedText = text.replace(/\s+/g, " ");
    }
    if (purpose === "removePunctuation") {
        analyzedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    }
    if (purpose === "removeNewLines") {
        analyzedText = text.replace(/\n+/g, " ");
    }

    res.status(200).render('analyzed', {analyzedText: analyzedText, purpose:purpose})
})

app.listen(PORT, () => {
    console.log(`TextUtils listening on port ${PORT}`)
})
