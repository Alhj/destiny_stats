import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './compenents/header/header';
import StartSearch from './compenents/startSearch/startSearch';
import ShowAccountInfo from './compenents/showAccountInfo/showAccountInfo';

const App: React.FC = () => {
  return (
      <BrowserRouter>
       <div className="App">       
        <Header/>
        <Route exact path='/' component={StartSearch}/>
        <Route exact path='/account/' compenent={<div><h1>hello world</h1></div>}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
