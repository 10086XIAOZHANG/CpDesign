// import Home from '@/pages/home';
import Loadable from '@/utils/loadable';
const Home = Loadable('home');
// const NotFound = Loadable('404');
export default [{ path: '/', component: Home, exact: true }];
