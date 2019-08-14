import React from "react";
import 'antd/dist/antd.css';
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./components/List";
import HeaderComponent from "./components/Header";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Route path="/" component={List} />
        </Content>
        <Footer style={{ textAlign: "center" }}>Super puper</Footer>
      </Layout>
    </Router>
  );
}

export default App;
