import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainMenu from 'C:/Users/sv9/react-app/app/client/container/MainMenu.js';
import NavBar from 'C:/Users/sv9/react-app/app/client/container/NavBar.jsx';
import StartContainer from 'C:/Users/sv9/react-app/app/client/container/start.js';
import LoginContainer from 'C:/Users/sv9/react-app/app/client/container/LoginContainer.jsx';
import { createBrowserHistory } from 'history';


// eslint-disable-next-line react/display-name
export default props => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path = "/"  component = {NavBar}/>
      <Route exact path="/menu" component={MainMenu} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/stop" component={StartContainer} />
    </Switch>
  </Router>
);
