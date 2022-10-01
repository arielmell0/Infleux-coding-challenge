import styled from "styled-components"
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import api from "../../services/campaignsService.js"
import { DeleteButton, EditButton } from "../Buttons/Buttons.js"

export const ListCampaigns = (object) => {
  const [listCampaigns, setListCampaigns] = useState([]);
  const history = useHistory()

  useEffect( () => {
    getCampaigns()
  }, [listCampaigns]);

  const getCampaigns = () => {
    api.get('fetch').then(({data}) => {
      setListCampaigns(data)
    });
  }

  const editCampaign = (id) => {
    console.log(id)
    history.push(`edit-campaign/${id}`)
  }

  const deleteCampaign = (id) => {
    console.log(id)
    api.delete(`fetch/${id}`)

    getCampaigns()
  }

  return (
    <FormGet>
      <table>
        <thead>
          <tr>
            <th>Campaign name</th>
            <th>Advertiser</th>
            <th>BID</th>
            <th>Conversion type</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              listCampaigns.map((item) => (
                <tr key={item._id}>
                  <td>{ item.name }</td>
                  <td>{ item.advertiser }</td>
                  <td>{ item.bid }</td>
                  <td>{ item.conversionType.toUpperCase() }</td>
                  <td><EditButton onClick={ () => editCampaign(item._id) }>Editar</EditButton></td>
                  <td><DeleteButton onClick={ () => deleteCampaign(item._id) }>Deletar</DeleteButton></td>
                </tr>
              ))
            }
        </tbody>

      </table>
    </FormGet>
  );
};

const FormGet = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
  width: 100vw;
`;