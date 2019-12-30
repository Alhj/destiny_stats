import React from 'react';
import Header from './compenents/header/header';
import StartSearch from './compenents/startSearch/startSearch'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <StartSearch/>
    </div>
  );
}

export default App;
