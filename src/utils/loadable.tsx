import Loadable from 'react-loadable';

const loadingComponent = () => {
  return null;
};

export default (loader: any, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  });
};
