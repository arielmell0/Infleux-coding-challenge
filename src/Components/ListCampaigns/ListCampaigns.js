import styled from "styled-components";
import { useState, useEffect } from 'react'
import api from "../../services/campaignsService.js";

export const ListCampaigns = (object) => {
  const [listCampaigns, setListCampaigns] = useState([]);

  useEffect( () => {
      api.get('fetch').then(({data}) => {
        setListCampaigns(data)
      });
  }, ['']);

  console.log(listCampaigns)

  return (
    <FormGet>
      <table>
        <tr>
          <th>Campaign name</th>
          <th>Advertiser</th>
          <th>BID</th>
          <th>Conversion type</th>
        </tr>

        <tr>
          {
            listCampaigns.map((item, index) => (
              <>
                <li key={index}>{item.name}</li>
                <li key={index}>{item.name}</li>
              </>
            ))
          }
        </tr>

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