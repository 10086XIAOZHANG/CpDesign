import * as React from 'react';

import { BrowserRouter } from 'react-keeper';
import { Root } from 'app/containers';
import routerContent from 'app/routers';
// render react DOM
export const App = () => (
  <Root>
    <BrowserRouter>{routerContent()}</BrowserRouter>
  </Root>
);
