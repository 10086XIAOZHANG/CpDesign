import Loadable from 'react-loadable';

const loadingComponent = () => {
  return null;
};

export default (pathName: string, loading = loadingComponent) => {
  return Loadable({
    loader: () =>
      import(/* webpackChunkName: "[request]" */ `../pages/${pathName}`),
    loading
  });
};
