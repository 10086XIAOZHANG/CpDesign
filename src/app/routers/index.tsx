import * as React from 'react';
import { Route } from 'react-router-dom';
import { TodoApp, DemoApp } from 'app/containers';
export default function routerContent(): any {
  return (
    <React.Fragment>
      <Route path="/demo" component={TodoApp} />
      <Route path="/cca" component={TodoApp} />
      <Route component={DemoApp} />
    </React.Fragment>
  );
}
