import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainMenu from '../Container/MainMenu';
import StartContainer from '../Container/start';
import { createBrowserHistory } from 'history';

// eslint-disable-next-line react/display-name
export default props => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={MainMenu} />
      <Route path="/start" component={StartContainer} />
      <Route path="/stop" component={StartContainer} />
    </Switch>
  </Router>
);
