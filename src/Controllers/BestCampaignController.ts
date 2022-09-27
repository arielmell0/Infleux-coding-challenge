// return the best campaign via get
// factor for the best campaign
// area (country) -> bid (price) -> publisher content (who will atract leads with the content)
import CampaignModel from "../Models/CampaignModel"
import { Request, Response } from 'express'

export const postCampaign = async (req: Request, res: Response) => {
    const { name, advertiser, keyWords,
         bid, conversionType, target } = req.body

    const campaign = new CampaignModel({
        name,
        advertiser,
        keyWords,
        bid,
        conversionType,
        target
    })

    try {
        await campaign.save()

        res.status(200).json({ message: 'Campanha salva com sucesso!' })
    } catch(error: any) {
        console.log(error)
        res.status(500).json({ message: 'Ops, ocorreu um erro no servidor!' })
    }
}

export const getCampaign = async (req: Request, res: Response) => {
    try {
        const campaign = await CampaignModel.find()

        res.status(200).json(campaign)
    } catch(error) {
        res.status(500).json({ erro: error })
    }
}