import React from "react";
import { Table, Input, Button, Icon } from "antd";
import { Get, Mutate } from "restful-react";

const List = props => {
  const columns = [
    {
      title: "№",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Товар",
      dataIndex: "image",
      key: "image",
      render: key => <img src={key} />
    },
    {
      title: "",
      dataIndex: "title",
      key: "title"
    },
    {
      title: "Цена",
      dataIndex: "cost",
      key: "cost"
    },
    {
      title: "Количество",
      dataIndex: "count",
      key: "count"
    },
    {
      title: "",
      dataIndex: "buy",
      key: "buy",
      render: () => <Button onClick={() => props.buyItem(props)}>купить</Button>
    }
  ];
  return (
    <ul className="list">
      {props.vendingList.map(item => (
        <li key={item.id} className="item">
          <div className="item__id">{item.id}</div>
          <div className="item__img">
            <img src={item.src} alt="" />
          </div>
          <div className="item__title">{item.title}</div>
          <div className="item__cost">{item.cost}</div>
          <div className="item__count">{item.count}</div>
          <div className="item__action">
            <Button onClick={() => props.buyItem(props, item.id)}>
              купить
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
