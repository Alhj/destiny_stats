import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './compenents/header/header';
import StartSearch from './compenents/startSearch/startSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path='/' component={StartSearch} exact/>
        <Route/>
      </BrowserRouter>
    </div>
  );
}

export default App;
