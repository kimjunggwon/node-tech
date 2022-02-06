const express = require('express');

const { User } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/', isNotLoggedIn, async (req, res, next) => {
    res.render('index', { title: 'Node-Tech' });
});

router.get('/intro', isNotLoggedIn, async (req, res, next) => {
    res.render('intro', { title: 'Intro' });
});

/* 게시판 라우팅 */
router.get('/tech', isNotLoggedIn, async (req, res, next) => {
    res.render('tech_board/list', { title: 'Tech-List' });
});

router.get('/newsletter', isNotLoggedIn, async (req, res, next) => {
    res.render('newsletter_board/list', { title: 'Newletter-List' });
});

router.get('/webzine', isNotLoggedIn, async (req, res, next) => {
    res.render('webzine_board/list', { title: 'webzine-List' });
});

router.get('/notice', isNotLoggedIn, async (req, res, next) => {
    res.render('notice/list', { title: 'Notice' });
});

router.get('/inquire', isNotLoggedIn, async (req, res, next) => {
    res.render('inquire/inquire', { title: 'Inquire' });
});

router.get('/auth', isNotLoggedIn, async (req, res, next) => {
    res.render('auth/login', { title: 'Login' });
});

router.get('/join', isNotLoggedIn, async (req, res, next) => {
    res.render('auth/join', { title: 'Join' });
});

module.exports = router;