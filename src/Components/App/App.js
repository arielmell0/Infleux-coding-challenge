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
        <Route path="/edit-campaign/:id" component={EditCampaign} exact/>
        <Route path="/create-campaign" component={CreateCampaign} exact/>
        <Route path="/list-campaign" component={ListCampaigns} exact/>
        <Route path="/" component={ Home } exact/>
      </Switch>
    </>      
  );
}

export default App;