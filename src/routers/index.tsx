import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from './routes';
import NotFound from '@/pages/404';
// import Loadable from 'react-loadable';
// import Loadable from '@/utils/loadable';

const Routes: React.FC = (history): React.ReactElement => {
  // const Home = Loadable('home');
  // const NotFound = Loadable('404');
  return (
    <Switch>
      {routers.map((route: any) => (
        <Route
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
