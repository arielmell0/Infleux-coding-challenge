import styled from "styled-components";
import { getCampaign } from '../../services/campaignsService.js'

const response = getCampaign()

export const ListCampaigns = (object) => {
  return (
    <FormGet>
      <table>
        <tr>
          <TableHead>Campaign name</TableHead>
          <TableHead>Advertiser</TableHead>
          <TableHead>BID</TableHead>
          <TableHead>Conversion type</TableHead>
        </tr>

        <tr>
          
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
          <td>Mexico</td>
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

const TableHead = styled.th`
  
`;

const TableItems = styled.li``;
