import * as React from 'react';
// import {  LocaleProvider } from "antd-mobile";

import Routes from '../routers';
// import { useSelector } from 'react-redux';
// import { RouteComponentProps } from 'react-router';
// import { withRouter } from 'react-router-dom';
const BasicLayout: React.FC = (props): React.ReactElement => {
  return (
    <div>
      <Routes />
    </div>
  );
};
export default BasicLayout;
