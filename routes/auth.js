const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const { user_id,  password, name, email, birth, permission } = req.body;
    try {
        const user_find = await User.findOne({ where: { user_id } });
        if(user_find){
            return res.redirect('/join?joinError=이미 가입된 이메일입니다.');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            user_id,
            password: hash,
            name,
            email,
            birth,
            permission,
        });
        return res.redirect('/?join?joinSuccess=회원가입을 축하합니다!');
    }catch(error){
        console.error(error);
        return next(error);
    }
});

router.post('/login', isNotLoggedIn, async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError){
            console.error(authError);
            return next(authError);
        }
        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if(loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    })(req, res, next);
});

router.get('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;