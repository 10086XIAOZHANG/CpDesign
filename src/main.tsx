import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import * as fixtures from 'app/fixtures';
import { createStores } from 'app/stores';
import { App } from 'app';

// prepare MobX stores
const history = createBrowserHistory();
const rootStore = createStores(history, fixtures!);

// render react DOM
ReactDOM.render(
  <Provider {...rootStore}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
