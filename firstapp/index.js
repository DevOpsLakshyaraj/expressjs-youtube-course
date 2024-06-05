const express = require('express');
const app = express();

const PORT = 8080 || process.env.PORT;

// app.get('') --> GET route
// app.post('') --> POST route
// app.put('') --> UPDATE route
// app.delete('') --> DELETE route

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hey I am Lakshyaraj from ProgrammingWIthLaksh!')
})

app.get('/contact', (req, res) => {
    res.send('Contact me for any kind of queries!')
})

app.use((req, res, next) => {
    res.status(404).send('This page was not found on this server!');
    next();
})

app.listen(PORT, () => {
    console.log(`First App listening on port ${PORT}`);
})
