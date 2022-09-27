"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaign = exports.postCampaign = void 0;
// return the best campaign via get
// factor for the best campaign
// area (country) -> bid (price) -> publisher content (who will atract leads with the content)
const CampaignModel_1 = __importDefault(require("../Models/CampaignModel"));
const postCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, advertiser, keyWords, bid, conversionType, target } = req.body;
    const campaign = new CampaignModel_1.default({
        name,
        advertiser,
        keyWords,
        bid,
        conversionType,
        target
    });
    try {
        yield campaign.save();
        res.status(200).json({ message: 'Campanha salva com sucesso!' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ops, ocorreu um erro no servidor!' });
    }
});
exports.postCampaign = postCampaign;
const getCampaign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const campaign = yield CampaignModel_1.default.find();
        res.status(200).json(campaign);
    }
    catch (error) {
        res.status(500).json({ erro: error });
    }
});
exports.getCampaign = getCampaign;
