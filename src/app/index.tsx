import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { Root } from 'app/containers';
import routerContent from 'app/routers';
// render react DOM
export const App = hot(({ history }) => (
  <Root>
    <BrowserRouter history={history}>{routerContent()}</BrowserRouter>
  </Root>
));
