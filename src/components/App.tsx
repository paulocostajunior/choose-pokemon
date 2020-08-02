import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Main from './Main';
import CardInfo from './CardInfo';

const App: React.FC = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Router history={history}>  
        <Header title="Choose Your Pokemon" />
        <Switch>
          <Route
            path ="/"
            exact component={Main}
          />
          <Route 
            path="/pokemon/:name/:img"
            exact component={CardInfo}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
