// Campaigns 
// Bid (price)
// Converstyon type: cpm, cpc or cpi | não especifica se é um ou mais, então será um
// Targetings (Publishers in determined area like Brazil)
import { Schema, model } from 'mongoose'

interface Campaign {
    name: string,
    advertiser: string,
    bid: number,
    conversionType: 'cpm' | 'cpf' | 'cpi',
    target: string
}

const CampaignSchema = new Schema<Campaign>({
    name: { type: String, required: true },
    advertiser: { type: String, required: true },
    bid: { type: Number, required: true },
    conversionType: { type: String, required: true },
    target: { type: String, required: true }
})

const CampaignModel = model<Campaign>('Campaign', CampaignSchema)

export default CampaignModel