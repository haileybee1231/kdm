const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
let path = require('path');
const db = require('../database/index.js');
const passport = require('passport');
const session = require('express-session')
const app = express();
require('dotenv').config();

// const http = require('http').Server(app);
app.use(session({
	secret: process.env.SESSION_PASSWORD || 'supersecretsecret',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Optional compression plugin, be sure to uncomment in webpack.config.js as well

// app.get('*js', (req, res, next) => {
// 	req.url += '.gz';
// 	res.set('Content-Encoding', 'gzip');
// 	res.set('Content-Type', 'text/javascript');
// 	next();
// });

app.use(express.static(path.join(__dirname, '../react-client/dist')));

// Router routes
app.use('/api/auth', 			require('./apis/auth-api'));
app.use('/api/campaign', 		require('./apis/campaign-api'));

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
	console.log('listening on port 8080!');
});
