const express = require('express');
const Contacts = require('../models/Contacts');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
})

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Us'})
})

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact Us'})
})

router.get('/post', (req, res) => {
    res.render('post', {title: 'Sample Post'})
})

router.get('/register', (req, res) => {
    res.render('register', {title: 'Register for an account'})
})

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login to Account'})
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {title: 'Admin Dashboard'})
})

router.get('/edit', (req, res) => {
    res.render('edit', {title: 'Edit Post'})
})

router.get('/delete', (req, res) => {
    res.render('delete', {title: 'Delete Post'})
})

router.post('/contact', async (req, res) => {
    if (req.body.name === "" || req.body.email === "" || req.body.phone === "" || req.body.message === "") {
        req.session.message = "Please fill up all the fields!";
        res.redirect('/contact');
    } else {
        await Contacts.create(req.body);
        req.session.message = "Contact message saved!";
        res.redirect('/contact')
    }
})

module.exports = router;
