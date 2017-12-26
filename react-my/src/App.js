import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import {is, Map} from 'immutalbe';
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
      <div className={this.state.collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <Sider onCollapseChange={() => this.onCollapseChange()} collapse={this.state.collapse} />
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div>
                内容区域
              </div>
            </div>
            <div className="ant-layout-footer">For myself</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
