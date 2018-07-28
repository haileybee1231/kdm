const CampaignAPI = module.exports = require('express').Router();
let db = require('../../database/index.js');

CampaignAPI.get('/all', async (req, res) => {
	let campaigns = await db.getAllCampaigns(req.user.user_id);
	res.status(200).json(campaigns);
})