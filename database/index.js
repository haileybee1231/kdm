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
	return knex('users').where('username', username).select()
}

const addUser = (username, email, password) => {
	return knex('users').insert({
		username: username,
		email: email,
		password: password
	})
}

const getAllCampaigns = (user_id) => {
	return knex('campaigns').where('owner', user_id).select()
}

const getUserCampaign = (username, campaign) => {
	return knex('campaigns').leftJoin('users', 'campaigns.owner', 'users.user_id')
		.where('username', username).andWhere('name', campaign)
		.select('campaign_id', 'name', 'lantern_year', 'survivor_count', 'campaigns.created_at');
}

const getCampaignSuvivors = (campaign_id) => {
	return knex('survivors').where('campaign', campaign_id).select();
}

module.exports = {
	checkUserCreds,
	addUser,
	getAllCampaigns,
	getUserCampaign,
	getCampaignSuvivors
}