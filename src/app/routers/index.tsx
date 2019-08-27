import * as React from 'react';
import { Route } from 'react-keeper';
import { TodoApp, DemoApp } from 'app/containers';
export default function routerContent(): any {
  return (
    <React.Fragment>
      <Route path="/demo" component={TodoApp} />
      <Route path="/ccca" component={TodoApp} />
      <Route index component={DemoApp} />
    </React.Fragment>
  );
}
