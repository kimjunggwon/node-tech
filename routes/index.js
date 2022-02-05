const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('index', { title: 'Node-Tech' });
});

router.get('/intro', async (req, res, next) => {
    res.render('intro', { title: 'Intro' });
});

router.get('/tech', async (req, res, next) => {
    res.render('tech_board/index', { title: 'Tech-List' });
});

router.get('/newsletter', async (req, res, next) => {
    res.render('newsletter_board/index', { title: 'Newletter-List' });
});

router.get('/webzine', async (req, res, next) => {
    res.render('webzine_board/index', { title: 'webzine-List' });
});

router.get('/inquire', async (req, res, next) => {
    res.render('inquire/index', { title: 'inquire' });
});

router.get('/auth', async (req, res, next) => {
    res.render('login', { title: 'login' });
});

module.exports = router;