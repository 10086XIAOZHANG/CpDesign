import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';

const Router = DefaultRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.tsx').default,
    routes: [
      {
        path: '/404',
        exact: true,
        component: require('../404.tsx').default,
      },
      {
        path: '/anonymousTrader',
        exact: true,
        component: require('../anonymousTrader/index.tsx').default,
      },
      {
        path: '/anonymousTransferAccounts',
        exact: true,
        component: require('../anonymousTransferAccounts/index.tsx').default,
      },
      {
        path: '/checkAnonymousTrader',
        exact: true,
        component: require('../checkAnonymousTrader/index.tsx').default,
      },
      {
        path: '/checkTrader',
        exact: true,
        component: require('../checkTrader/index.tsx').default,
      },
      {
        path: '/createAccount',
        exact: true,
        component: require('../createAccount/index.tsx').default,
      },
      {
        path: '/home',
        exact: true,
        component: require('../home/index.tsx').default,
      },
      {
        path: '/importAccount',
        exact: true,
        component: require('../importAccount/index.tsx').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.tsx').default,
      },
      {
        path: '/openTransferAccounts',
        exact: true,
        component: require('../openTransferAccounts/index.tsx').default,
      },
      {
        path: '/synchronousAready',
        exact: true,
        component: require('../synchronousAready/index.tsx').default,
      },
      {
        path: '/tradingDetails',
        exact: true,
        component: require('../tradingDetails/index.tsx').default,
      },
      {
        component: () =>
          React.createElement(
            require('/Users/luodan/Documents/Onething/lkc-wallet-pc/lkc-wallet-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/luodan/Documents/Onething/lkc-wallet-pc/lkc-wallet-web/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
