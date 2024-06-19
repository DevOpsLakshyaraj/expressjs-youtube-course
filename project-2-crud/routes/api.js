const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

router.post('/add', async (req, res) => {
    const note = new Notes(req.body);
    await note.save();
    
    return res.redirect('/')
})

router.post('/update', async (req, res) => {
    await Notes.findOneAndUpdate({uuid: req.body.uuid}, {
        $set: {noteDesc: req.body.noteDesc}
    })

    return res.redirect('/edit/'+req.body.uuid)
})

router.post('/delete', async(req, res) => {
    await Notes.findOneAndDelete({uuid: req.body.uuid});

    return res.redirect('/')
})

module.exports = router;
