import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from '@/config/routerConfig';
import NotFound from '@/pages/404';

const Routes: React.FC = (history): React.ReactElement => {
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
