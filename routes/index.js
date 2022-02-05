const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('index', { title: 'Node-Tech' });
});

module.exports = router;