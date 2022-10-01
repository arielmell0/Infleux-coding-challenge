import styled from "styled-components";
import { useState, useEffect } from 'react'
import api from "../../services/campaignsService.js";

export const ListCampaigns = (object) => {
  const [listCampaigns, setListCampaigns] = useState([]);

  useEffect( () => {
      api.get('fetch').then(({data}) => {
        setListCampaigns(data)
      });
  }, []);

  return (
    <FormGet>
      <table>
        <thead>
          <tr>
            <th>Campaign name</th>
            <th>Advertiser</th>
            <th>BID</th>
            <th>Conversion type</th>
          </tr>
        </thead>

        <tbody>
            {
              listCampaigns.map((item) => (
                <tr>
                  <td key={ item.name }>{ item.name }</td>
                  <td key={ item.name }>{ item.advertiser }</td>
                  <td key={ item.name }>{ item.bid }</td>
                  <td key={ item.name }>{ item.conversionType }</td>
                  <td key={ item.name }><button>Editar</button></td>
                  <td key={ item.name }><button>Deletar</button></td>
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