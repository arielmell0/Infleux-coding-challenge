import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components";
import axios from 'axios';
import api from '../../services/campaignsService.js'
import { Container } from "../Container/Container.js";
import { ListCampaigns } from '../ListCampaigns/ListCampaigns.js';

export const CreateCampaign = () => {
  const history = useHistory()
  const [campaignName, setCampaignName] = useState()
  const [advertiser, setAdvertiser] = useState()
  const [keyWords, setKeyWords] = useState()
  const [conversionType, setConversionType] = useState()
  const [target, setTarget] = useState()
  const [BID, setBID] = useState()
  const [campaignCreatedWithSucess, setCampaignCreatedWithSucess ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  
    const data = {
      name: campaignName,
      advertiser,
      keyWords,
      conversionType,
      target,
      bid: BID
    }

    api.post('http://localhost:3333/fetch', data)
    .then((data) => {
      setCampaignCreatedWithSucess(true)

      setTimeout(() => history.push('/list-campaign'), 2000 )
    })
    .catch(() => console.log('ops, me dei mal'))
  }

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <div>
          <label for="name">Campaign name:</label>
          <input value={ campaignName } onChange={(e) => setCampaignName(e.target.value)} type="text" id="name" />
        </div>

        <div>
          <label for="advertiser">Advertiser</label>
          <input value={ advertiser } onChange={(e) => setAdvertiser(e.target.value)} type="text" id="advertiser" />
        </div>

        <div>
          <label for="keyWords">Key Words:</label>
          <input value={ keyWords } onChange={(e) => setKeyWords(e.target.value)} id="text"></input>
        </div>

        <div>
          <label for="bid">BID</label>
          <input value={ BID } onChange={(e) => setBID(e.target.value)} id="bid"></input>
        </div>

        <div>
          <label for="conversionType">Conversion type:</label>
          <select value={ conversionType } onChange={(e) => setConversionType(e.target.value)} id="conversionType">
            <option selected>Selecione uma opção:</option>
            <option value="cpm">CPM (Cost per milion)</option>
            <option value="cpc">CPC (Cost per click)</option>
            <option value="cpa">CPA (Cost per a)</option>
          </select>
        </div>

        <div>
          <label for="target">Target:</label>
          <input value={ target } onChange={(e) => setTarget(e.target.value)} id="target"></input>
        </div>

        <button type="submit">enviar</button>

        { campaignCreatedWithSucess && (
          <div>Campaign created with sucess! </div>
        )}
      </form>
    </Container>
  );
};
