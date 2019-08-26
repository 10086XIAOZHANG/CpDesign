import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router, Route, Switch } from 'react-router';
import { Root, TodoApp, DemoApp } from 'app/containers';
// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <Router history={history}>
      <Switch>
        <Route path="/demo" component={TodoApp} />
        <Route component={DemoApp} />
      </Switch>
    </Router>
  </Root>
));
