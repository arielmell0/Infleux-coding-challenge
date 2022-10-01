import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components';
import api from '../../services/campaignsService.js'
import { Container } from "../Container/Container.js";
import { DeleteButton, EditButton, SubmitButton } from '../Buttons/Buttons.js';
import { ListCampaigns } from '../ListCampaigns/ListCampaigns.js';

export const EditCampaign = (props) => {
  const history = useHistory()

  const idCampaign = props.match.params.id

  const [campaignName, setCampaignName] = useState()
  const [advertiser, setAdvertiser] = useState()
  const [conversionType, setConversionType] = useState()
  const [target, setTarget] = useState()
  const [BID, setBID] = useState()
  const [campaignCreatedWithSucess, setCampaignCreatedWithSucess ] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
  
    const data = {
      name: campaignName,
      advertiser,
      conversionType,
      target,
      bid: BID
    }

    api.patch(`http://localhost:3333/fetch/${idCampaign}`, data)
    .then((data) => {
      setCampaignCreatedWithSucess(true)

      setTimeout(() => history.push('/list-campaign'), 2000 )
    })
    .catch(() => console.log('ops, me dei mal'))
  }

  return (
    <Container>
      <form onSubmit={ handleSubmit }>
        <FormDiv>
          <label for="name">Campaign name:</label>
          <input value={ campaignName } onChange={(e) => setCampaignName(e.target.value)} type="text" id="name" />
        </FormDiv>

        <FormDiv>
          <label for="advertiser">Advertiser</label>
          <input value={ advertiser } onChange={(e) => setAdvertiser(e.target.value)} type="text" id="advertiser" />
        </FormDiv>

        <FormDiv>
          <label for="bid">BID</label>
          <input value={ BID } onChange={(e) => setBID(e.target.value)} id="bid"></input>
        </FormDiv>

        <FormDiv>
          <label for="conversionType">Conversion type:</label>
          <select value={ conversionType } onChange={(e) => setConversionType(e.target.value)} id="conversionType">
            <option selected>Select an option:</option>
            <option value="cpm">CPM (Cost per milion)</option>
            <option value="cpc">CPC (Cost per click)</option>
            <option value="cpa">CPA (Cost per a)</option>
          </select>
        </FormDiv>

        <FormDiv>
          <label for="target">Target:</label>
          <input value={ target } onChange={(e) => setTarget(e.target.value)} id="target"></input>
        </FormDiv>

        <EditButton style={{width: "100%"}} type="submit">Edit</EditButton>

        { campaignCreatedWithSucess && (
          <SucessFeedBack>Campaign edited with sucess! </SucessFeedBack>
        )}
      </form>
    </Container>
  );
};

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 3px 0 3px 0;
`

const SucessFeedBack = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);
  font-family: Roboto, sans-serif;
  font-size: 1.4rem;
  color: orange;
`