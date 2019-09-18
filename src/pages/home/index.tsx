import * as React from 'react';
import { useDispatch } from 'react-redux';
import { NavBar, Icon, Button } from 'antd-mobile';
import { saveOrderId } from '@/store/action/order';
// import { getURLQueryString } from "@/utils/common";
import styles from './styles/index.less';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = React.useState(1);
  const onLeftClick = () => {
    dispatch(saveOrderId(1233));
    setOrder(1);
  };
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
        NavBar{order}
      </NavBar>
      <input />
      <Button type="primary">Default</Button>
    </div>
  );
};
export default Home;
