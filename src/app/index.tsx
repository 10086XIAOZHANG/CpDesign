import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route } from 'react-router-dom';
import { Root, TodoApp, DemoApp } from 'app/containers';
// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <BrowserRouter history={history}>
      <Route path="/demo" component={TodoApp} />
      <Route path="/cc" component={TodoApp} />
      <Route component={DemoApp} />
    </BrowserRouter>
  </Root>
));
