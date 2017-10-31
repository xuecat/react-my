import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import Sider from './sider';

class App extends Component {

  constructor(pro) {
    super(pro);
    this.state = {collapse: true,};
  }

  onCollapseChange() {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <Sider onCollapseChange={() => this.onCollapseChange()}/>
      </div>
    );
  }
}

export default App;
