// Routes Index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'nioscent.net'});
});

router.get('/projects', (req, res) => {
    res.render('projects.html', {title: 'nioscent.net | projects'})
});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'nioscent.net | contact'})
});


module.exports = router;