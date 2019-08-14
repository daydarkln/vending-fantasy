import React from "react";
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const List = props => {
  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      width: '30%',
      ...props.getColumnSearchProps('number'),
    },
    {
      title: 'Товар',
      dataIndex: 'image',
      key: 'image',
      width: '20%',
    },
    {
      title: '',
      dataIndex: 'title',
      key: 'title',
      ...props.getColumnSearchProps('title'),
    },
    {
      title: 'Цена',
      dataIndex: 'cost',
      key: 'cost',
      ...props.getColumnSearchProps('cost'),
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      key: 'count',
      ...props.getColumnSearchProps('count'),
    },
    {
      title: '',
      dataIndex: 'buy',
      key: 'buy',
      render: () => <Button onClick={props.buyItem}>купить</Button>,
    },
  ];
  return <Table columns={columns} dataSource={props.data} />;
}

export default List;
