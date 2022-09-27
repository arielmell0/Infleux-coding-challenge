"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BestCampaignController_1 = require("./Controllers/BestCampaignController");
const route = (0, express_1.Router)();
// home route
route.get('/', (req, res) => res.status(200).json({ message: 'API running!' }));
// fetch route
route.get('/fetch', BestCampaignController_1.getCampaign);
route.post('/fetch', BestCampaignController_1.postCampaign);
exports.default = route;
