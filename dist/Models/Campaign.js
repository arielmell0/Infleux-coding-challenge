"use strict";
// Campaigns 
// Bid (price)
// Converstyon type: cpm, cpc or cpi
// Targetings (Publishers in determined area like Brazil)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(process.env.CONNECTION_STRING);
