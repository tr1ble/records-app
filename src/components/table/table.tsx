import React from 'react';
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

type Props = {
  data: IRecord[],
  columns: string[],
  actions?: Action[],
}

const ACTION_TITLE = 'Action';
const ACTION_KEY = 'action';

export const TableComponent: React.FC<Props> = ({ data, columns, actions}) => {
  const mappedColumn: ColumnsType<IRecord> = columns.map(
      column => ({ key: column.toLocaleLowerCase(), title: column, dataIndex: column.toLocaleLowerCase() })
  );

  if(actions?.length) {
    mappedColumn.push({
      title: ACTION_TITLE,
      key: ACTION_KEY,
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
      <div>
        <Table columns={mappedColumn} dataSource={mappedData} />
      </div>
  )
};

export default TableComponent;
