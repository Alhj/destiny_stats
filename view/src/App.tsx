import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./compenents/header/header";
import StartSearch from "./compenents/startSearch/startSearch";
import ShowAccountInfo from "./compenents/showAccountInfo/showAccountInfo";
import Test from "./compenents/test";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={StartSearch} />
        <Route
          path="/account/:platformNumber/:accountName/"
          component={ShowAccountInfo}
        />
        <Route path="/test/:id" component={Test} />
      </Switch>
    </Router>
  );
};

export default App;
