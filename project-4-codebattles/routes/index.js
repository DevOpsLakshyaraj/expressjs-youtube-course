const express = require('express');
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

module.exports = router;
