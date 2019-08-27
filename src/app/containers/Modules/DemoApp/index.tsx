import * as React from 'react';
import * as style from './style.less';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
// import { Header } from 'app/components/Todo/Header';
// import { Footer } from 'app/components/Todo/Footer';
// import { DemoList } from 'app/components/Demo';
import { DemoStore, RouterStore } from 'app/stores';
import {
  STORE_DEMO,
  STORE_ROUTER,
  DEMO_FILTER_LOCATION_HASH,
  DemoFilter
} from 'app/constants';

export interface DemoAppProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_TODO]: DemoStore;
}

export interface DemoAppState {
  filter: DemoFilter;
}

@inject(STORE_DEMO, STORE_ROUTER)
@observer
export class DemoApp extends React.Component<DemoAppProps, DemoAppState> {
  constructor(props: DemoAppProps, context: any) {
    super(props, context);
    this.state = { filter: DemoFilter.ALL };
  }

  componentWillMount() {
    this.checkLocationChange();
  }

  componentDidMount() {
    const demoStore = this.props[STORE_DEMO] as DemoStore;
    demoStore.updateDocument();
  }

  componentWillReceiveProps(nextProps: any, nextContext: any) {
    this.checkLocationChange();
  }

  checkLocationChange() {
    const router = this.props[STORE_ROUTER] as RouterStore;
    const filter = Object.keys(DEMO_FILTER_LOCATION_HASH)
      .map((key) => Number(key) as DemoFilter)
      .find(
        (filter) => DEMO_FILTER_LOCATION_HASH[filter] === router.location.hash
      );
    this.setState({ filter });
  }

  getFilteredTodo(filter: DemoFilter) {
    const demoStore = this.props[STORE_DEMO] as DemoStore;
    switch (filter) {
      case DemoFilter.ACTIVE:
        return demoStore.activeTodos;
      case DemoFilter.COMPLETED:
        return demoStore.completedTodos;
      default:
        return demoStore.demosList;
    }
  }

  render() {
    // const demoStore = this.props[STORE_DEMO] as DemoStore;
    const { children } = this.props;
    // const { filter } = this.state;
    // const filteredTodos = this.getFilteredTodo(filter);
    // const footer = demoStore.demosList.length && <div />;

    return (
      <div className={style.normal}>
        {/* {footer} */}
        {/* {demoStore.demosList.length && (
          <DemoList demosList={demoStore.demosList} />
        )} */}
        {children}
      </div>
    );
  }
}
