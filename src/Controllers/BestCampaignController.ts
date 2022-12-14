// return the best campaign via get
// factor for the best campaign
// area (country) -> bid (price) -> publisher content (who will atract leads with the content)
import CampaignModel from "../Models/CampaignModel"
import { Request, response, Response } from 'express'

export const postCampaign = async (req: Request, res: Response) => {
    interface Campaign {
        name: string,
        advertiser: string,
        bid: number,
        conversionType: "cpm" | "cpc" | "cpa",
        target: string
    }

    const { name, advertiser,
         bid, conversionType, target }: Campaign = req.body

    // Validações
    if(!name) {
        return res.status(422).json({ message: 'the name of the campaign is required.'} )
    }

    if(!advertiser) {
        return res.status(422).json({ message: 'the e-mail of the campaign is required.'} )
    }

    if(!bid) {
        return res.status(422).json({ message: 'the bid of the campaign is required.'} )
    }

    if(!conversionType) {
        return res.status(422).json({ message: 'the conversion type of the campaign is required.'} )
    }

    if(!target) {
        return res.status(422).json({ message: 'A senha é obrigatório!'} )
    }


    const campaign = new CampaignModel({
        name,
        advertiser,
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
        
        const processaBID = () => {
            const headerLanguage = req.get('Accept-Language')
            const languageRegExp = [/pt-br/gi, /en./gi]
            console.log(headerLanguage)           

            campaign.forEach(item => {
                if(headerLanguage?.match(languageRegExp[0])) {
                    if(item.target.match(/bra?(s|z)il/gi)) {
                        item.bid += 1000
                        console.log(item.target)
                    }
                }
            })
        }

        processaBID()
        res.status(200).json(campaign)
    } catch(error) {
        res.status(500).json({ erro: error })
    }
}

export const patchCampaign = async (req: Request, res: Response) => {
    const id = req.params.id

    const { name, advertiser,
      bid, conversionType, target } = req.body

    const campaign = {
      name,
      advertiser,
      bid,
      conversionType,
      target
    }

    try {
        const updateCampaign = await CampaignModel.updateOne({ _id: id }, campaign)

        if(updateCampaign.matchedCount === 0) {
            res.status(422).json({ message: 'Campaign not found!' })
            return
        }

        res.status(200).json({ message: 'Campaign edited with sucess!' })
    } catch(error) {
        res.status(500).json({ erro: 'ooops, some error as ocurred: ', error })
    }
}

export const deleteCampaign = async(req: Request, res: Response) => {
  const id = req.params.id

  const campaign = await CampaignModel.findOne({ _id: id })

  if(!campaign) {
      res.status(422).json({ message: 'O usuário não foi encontrado!' })
      return
  }
  
  try {
      await CampaignModel.deleteOne({ _id: id })

      res.status(200).json( { message: 'Campaign removed with sucess!'} )
  } catch (error) {
      res.status(500).json({ erro: error })
  }
}