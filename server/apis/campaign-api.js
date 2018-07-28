const CampaignAPI = module.exports = require('express').Router();
let db = require('../../database/index.js');

CampaignAPI.get('/all', async (req, res) => {
	let campaigns = await db.getAllCampaigns(req.user.user_id);
	res.status(200).json(campaigns);
})

CampaignAPI.get('/select*', async (req, res) => {
	let campaign = await db.getUserCampaign(req.user.username, req.query.campaign);
	let survivors = await db.getCampaignSuvivors(campaign[0].campaign_id);
	res.status(200).json({ campaign: campaign[0], survivors });
})