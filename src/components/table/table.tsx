import React from 'react';
import {Button, Space, Table} from 'antd';
import classNames from 'classnames/bind';
import styles from './table.scss';
import type { ColumnsType } from 'antd/es/table';

const cx = classNames.bind(styles);

type Props = {
  data: IRecord[],
  columns: string[],
  actions?: Action[],
}

export const TableComponent: React.FC<Props> = ({ data, columns, actions}) => {
  const mappedColumn: ColumnsType<IRecord> = columns.map(
      column => ({ key: column.toLocaleLowerCase(), title: column, dataIndex: column.toLocaleLowerCase() })
  );

  if(actions?.length) {
    mappedColumn.push({
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
            {actions.map(action => <Button onClick={e => action.onHandle(record)} key={action.name}>{action.name}</Button>)}
          </Space>
      )
    });
  }

  const mappedData: IRecord[] = data.map(
      item => ({ ...item, key: item.id })
  );

  return (
      <div className={cx('table')}>
        <Table columns={mappedColumn} dataSource={mappedData} />
      </div>
  )
};

export default TableComponent;
