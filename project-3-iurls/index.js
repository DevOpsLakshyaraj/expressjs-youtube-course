const express = require('express');
const connectToMongo = require('./lib/db');
const exphbs = require('express-handlebars');
const path = require('path');
const {truncate, formatDate} = require('./lib/hbs');
const Urls = require('./models/Urls');

connectToMongo();

const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    helpers: {truncate, formatDate}
}))

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    const urlsObj = await Urls.find({}).lean();
    // res.send('Url shortening app');
    res.render('index', {urls: urlsObj})
})

app.get('/visit/:id', async (req, res) => {
    const urlObj = await Urls.findOne({ shorten_id: req.params.id });
    // res.send('Url shortening app');
    res.redirect(urlObj.url)
})

app.post('/shorten', async (req, res) => {
    await Urls.create(req.body);
    return res.redirect('/');
})

app.listen(port, () => {
    console.log(`Url shortening app listening on port ${port}`);
})
