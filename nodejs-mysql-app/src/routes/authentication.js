const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/signup', (req, res)=>{
    res.render('auth/signup');
});
/*
router.post('/signup',(req,res)=>{
    passport.authenticate('local.signup',{
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    });
    res.send('received');
});*/

router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/login',(req, res)=>{
    res.render('auth/login');
})

router.post('/login',(req, res, next)=>{
    passport.authenticate('local.login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});

router.get('/profile', (req,res)=>{
    res.render('profile');
});

module.exports = router;