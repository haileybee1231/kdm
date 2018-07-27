const config = require('./config.js');
require('dotenv').config();

const knex = require('knex')({
	client: 'pg',
	connection: {
		host: process.env.PGHOST,
		password: process.env.PGPASSWORD,
		user: process.env.PGUSER,
		database: process.env.PGDATABASE,
	},
	ssl: true
});

const checkUserCreds = (username) => {
	return knex('users').select().where('username', username)
}

const addUser = (username, email, password) => {
	return knex('users').insert({
		username: username,
		email: email,
		password: password
	})
}

module.exports = {
	checkUserCreds,
	addUser
}