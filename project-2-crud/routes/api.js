const express = require('express');
const Notes = require('../models/Notes');
const router = express.Router();

router.post('/add', async (req, res) => {
    if (req.body.noteDesc === "") {
        req.session.message = {
            status: 'error',
            msg: 'Please fill up all the fields!'
        }
        
        return res.redirect('/')
    } else {
        const note = new Notes(req.body);
        await note.save();
        
        req.session.message = {
            status: 'success',
            msg: 'Your note has been added successfully!'
        }

        return res.redirect('/')
    }
})

router.post('/update', async (req, res) => {
    if (req.body.noteDesc === "") {
        req.session.message = {
            status: 'eror',
            msg: 'Please fill up all the fields!'
        }

        return res.redirect('/edit/' + req.body.uuid)
    } else {
        await Notes.findOneAndUpdate({ uuid: req.body.uuid }, {
            $set: { noteDesc: req.body.noteDesc }
        })

        req.session.message = {
            status: 'success',
            msg: 'Your note has been updated successfully!'
        }

        return res.redirect('/edit/' + req.body.uuid)
    }
})

router.post('/delete', async (req, res) => {
    await Notes.findOneAndDelete({ uuid: req.body.uuid });

    req.session.message = {
        status: 'success',
        msg: 'Your note has been deleted successfully!'
    }

    return res.redirect('/')
})

module.exports = router;
