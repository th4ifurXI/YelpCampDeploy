const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync')
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(catchAsync(users.renderLogin))
    .post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),  catchAsync(users.login));

router.get('/logout', users.logout); 

module.exports = router;
