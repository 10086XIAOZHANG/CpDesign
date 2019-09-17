import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Loadable from 'react-loadable';
import Loadable from '@/utils/loadable';
import NotFound from '../pages/404';

const Routes: React.FC = (history): React.ReactElement => {
  const Home = Loadable(() =>
    import(/* webpackChunkName: "home" */ '../pages/home')
  );
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
