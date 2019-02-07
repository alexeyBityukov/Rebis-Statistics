import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import RegistrationContainer from '../components/account/registration/RegistrationContainer';

const browserHistory = createBrowserHistory();

export default () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/registration" component={RegistrationContainer} />
    </Switch>
  </Router>
);
