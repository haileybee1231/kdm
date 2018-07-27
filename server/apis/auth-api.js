const AuthAPI = module.exports = require('express').Router();
const passport = require('passport');
require('../config/passport.js')(passport);

AuthAPI.post('/signup', passport.authenticate('local-signup'), (req, res) => {
	res.status(201).end();
})

AuthAPI.post('/login', passport.authenticate('local-login'), (req, res) => {
	res.status(201).json(req.user);
})