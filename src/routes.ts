import { Router } from 'express'
import { getCampaign, postCampaign, patchCampaign, deleteCampaign } from './Controllers/BestCampaignController'

const route = Router()

// home route
route.get('/', (req, res) => res.status(200).json({ message: 'API running!' }))

// fetch route
route.get('/fetch', getCampaign)
route.post('/fetch', postCampaign)
route.patch('/fetch/:id', patchCampaign)
route.delete('/fetch/:id', deleteCampaign)

export default route