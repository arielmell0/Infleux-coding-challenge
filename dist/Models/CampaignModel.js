"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Campaigns 
// Bid (price)
// Converstyon type: cpm, cpc or cpi | não especifica se é um ou mais, então será um
// Targetings (Publishers in determined area like Brazil)
const mongoose_1 = require("mongoose");
const CampaignSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    advertiser: { type: String, required: true },
    keyWords: { type: [String], required: true },
    bid: { type: Number, required: true },
    conversionType: { type: String, required: true },
    target: { type: String, required: true }
});
const CampaignModel = (0, mongoose_1.model)('Campaign', CampaignSchema);
exports.default = CampaignModel;
