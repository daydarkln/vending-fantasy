import React from "react";
import { Link } from "react-router-dom";
import { Menu, Layout, Avatar } from "antd";
import Get from "restful-react";
import { pathOr } from "ramda";

const { Header } = Layout;

const HeaderComponent = props => (
  <Header
    style={{ position: "fixed", zIndex: 1, width: "100%" }}
    className="df jcsb aic"
  >
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/list">Купить</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/add">Добавить</Link>
      </Menu.Item>
    </Menu>
    <div className="header__profile">
      <div className="df aic">
        <Avatar icon="user" />
        <div className="df fdc header__info">
          <span>{pathOr("", ["account", "name"], props)}</span>
          <span>Баланс: {pathOr("0", ["account", "balance"], props)}р</span>
        </div>
      </div>
    </div>
  </Header>
);

export default HeaderComponent;
