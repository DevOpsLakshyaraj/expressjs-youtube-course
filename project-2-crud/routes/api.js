const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

router.post('/add', async (req, res) => {
    const note = new Notes(req.body);
    await note.save();
    return res.json({status: 'success'})
})

module.exports = router;
