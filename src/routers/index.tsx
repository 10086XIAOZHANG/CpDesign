import * as React from 'react';
import { Route } from 'react-keeper';
import Home from '../pages/home';
import NotFound from '../pages/404';

const Routes: React.FC = (history): React.ReactElement => {
  return (
    <>
      <Route cache={true} index={true} path="/" component={Home} />
      <Route miss={true} component={NotFound} />
    </>
  );
};

export default Routes;
