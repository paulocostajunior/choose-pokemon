import React from 'react';
import './App.css';

import Card from '../components/Card'

import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import history from '../history';
import Main from './Main';
import { Link } from 'react-router-dom';
import CardInfo from './CardInfo';

const App: React.FC = () => {
  class Hello extends React.Component {
    render() { return (<div><Link to="/goodbye">GoodBye</Link></div>)}
  }

  class GoodBye extends React.Component {
    render() { return (<div><Link to="/hello">Hello</Link></div>)}
  }

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
