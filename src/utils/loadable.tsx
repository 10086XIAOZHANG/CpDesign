// import * as React from 'react';
import Loadable from 'react-loadable';

const Loading = ({ pastDelay }: any) => {
  return null;
};

export default (pathName: string, loading = Loading) => {
  return Loadable({
    loader: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${pathName}`),
    loading
  });
};
