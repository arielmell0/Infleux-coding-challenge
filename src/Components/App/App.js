import Menu from '../Menu/Menu';
import GlobalStyle from '../../globalStyles';
import './App.css';
import { CreateCampaign } from '../CreateCampaign/CreateCampaign'
import { ListCampaigns } from '../ListCampaigns/ListCampaigns';
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home';


function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />

      <Switch>
        <Route path="/create-campaign" component={CreateCampaign} />
        <Route path="/list-campaign" component={ListCampaigns} />
        <Route path="/" component={ Home } />
      </Switch>
    </>      
  );
}

export default App;