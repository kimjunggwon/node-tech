const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const User          = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'user_id',
        passwordField: 'password',
    }, async (user_id, password, done) => {
        try {
            const user_find = await User.findOne({ where: { user_id } });
            if(user_find){
                const result = await bcrypt.compare(password, user_find.password);
                if(result){
                    done(null, user_find);
                }else{
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            }else{
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        }catch(error){
            console.error(error);
            done(error);
        }
    }));
};