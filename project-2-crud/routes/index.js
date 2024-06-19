const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

router.get('/', async (req, res) => {
    const notes = await Notes.find({});
    res.render('index', {notes: notes})
})

router.get('/edit/:uuid', async (req, res) => {
    const note = await Notes.findOne({uuid: req.params.uuid})
    res.render('edit', {note: note})
})

router.get('/delete/:uuid', async (req, res) => {
    const note = await Notes.findOne({uuid: req.params.uuid})
    res.render('delete', {uuid: note.uuid})
})

module.exports = router;
