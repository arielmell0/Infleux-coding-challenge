import Menu from '../Menu/Menu.js';
import GlobalStyle from '../../globalStyles.js';
import './App.css';
import { CreateCampaign } from '../CreateCampaign/CreateCampaign.js'
import { ListCampaigns } from '../ListCampaigns/ListCampaigns.js';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home.js';
import { EditCampaign } from '../EditCampaign/EditCampaign.js';


function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />

      <Switch>
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/list-campaign" component={ListCampaigns} />
        <Route path="/edit-campaign/:id" component={EditCampaign} />
        <Route path="/" component={ Home } />
      </Switch>
    </>      
  );
}

export default App;