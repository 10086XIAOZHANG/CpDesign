import * as React from 'react';
// import { useSelector, useDispatch } from "react-redux";
import { NavBar, Icon } from 'antd-mobile';
// import { getURLQueryString } from "@/utils/common";
import styles from './index.less';

const Home: React.FC = (): React.ReactElement => {
  const onLeftClick = () => console.log('onLeftClick');
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
      home
    </div>
  );
};
export default Home;
