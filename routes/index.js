const express = require('express');

const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

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
    res.render('auth/login', { title: 'login' });
});

router.get('/join', isNotLoggedIn, async (req, res, next) => {
    res.render('auth/join', { title: 'join' });
});

module.exports = router;