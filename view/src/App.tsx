import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import Header from './compenents/header/header';
import StartSearch from './compenents/startSearch/startSearch';
import ShowAccountInfo from './compenents/showAccountInfo/showAccountInfo';

const App: React.FC = () => {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={StartSearch}/>
          <Route exact path='/account/' component={ShowAccountInfo}/>
        </Switch>
      </Router>
  );
}

export default App;
