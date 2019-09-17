import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/404';

const Routes: React.FC = (history): React.ReactElement => {
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
