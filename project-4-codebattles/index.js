const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const connectToMongo = require('./lib/db');
const app = express();

connectToMongo();

const PORT = 8080 || process.env.PORT;

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'layout'
}))
app.set('view engine', 'hbs')

// Static files
app.use('/assets', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
    console.log(`CodeBattles listening on port ${PORT}`);
})
