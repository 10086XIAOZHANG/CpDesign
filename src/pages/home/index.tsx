import * as React from 'react';
// import { useSelector, useDispatch } from "react-redux";
import { NavBar, Icon } from 'antd-mobile';

import { Control } from 'react-keeper';
// import { getURLQueryString } from "@/utils/common";
import styles from './index.less';

const Home: React.FC = (): React.ReactElement => {
  const onLeftClick = () => Control.go('/pay?orderId=' + 1233);
  return (
    <div className={styles.home}>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={onLeftClick}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />
        ]}
      >
        NavBar
      </NavBar>
      <input />
    </div>
  );
};
export default Home;
