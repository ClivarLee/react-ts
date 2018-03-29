import * as React from 'react';
import * as ReactRouterDom from 'react-router-dom';
import App from './containers/App';
import Hello from './containers/Hello';

const { HashRouter: Router, Route, Switch } = ReactRouterDom;

export default (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route path="/hello" component={Hello} />
    </Switch>
  </Router>
);