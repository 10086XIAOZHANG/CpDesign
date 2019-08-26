import * as React from 'react';
import { ListView } from 'antd-mobile';
import { DemoModel } from 'app/models';

export interface DemoListProps {
  demosList: DemoModel[];
}

export class DemoList extends React.Component<DemoListProps, {}> {
  protected lv: any;
  constructor(props?: DemoListProps, context?: any) {
    super(props, context);
    this.lv = React.createRef();
  }

  render() {
    const { demosList } = this.props;
    const renderRow = (
      rowData: Record<string, any>,
      sectionID: string,
      rowID: string
    ) => {
      return <div>4324</div>;
    };
    return (
      <ListView
        ref={this.lv}
        dataSource={new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        }).cloneWithRows(demosList || [])}
        renderRow={renderRow}
        initialListSize={10}
        pageSize={10}
        style={{
          height: '100vh'
        }}
        className="ant-list-view"
        onEndReached={() => {}}
        onEndReachedThreshold={20}
      />
    );
  }
}

export default DemoList;
