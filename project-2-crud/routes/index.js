const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

router.get('/', async (req, res) => {
    const notes = await Notes.find({});
    res.render('index', {notes: notes})
})

module.exports = router;
