import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = props => (
  <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/list">Купить</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/add">Добавить</Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default HeaderComponent