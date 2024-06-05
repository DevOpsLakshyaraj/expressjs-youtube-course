const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.send(path.join(__dirname, 'index.html'))
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use((req, res, next) => {
    res.status(404).send('This page was not found on this server!');
    next();
})

app.listen(PORT, () => {
    console.log(`First App listening on port ${PORT}`);
})
