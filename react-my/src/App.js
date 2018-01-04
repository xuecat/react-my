import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import logo from './logo.svg';
import './App.css';
import Sider from './sider';
import {connect} from 'react-redux'
import {createCollapse} from './data/Actions'

class App extends Component {

  render() {
    const {onCollapseChange, collapse} = this.props;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <Sider onCollapseChange={onCollapseChange} collapse={collapse} />
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

const mapStateToProps = (states) => ({
  collapse: states.get('collapse')
})

const mapDispatchToProps = (dis, own) => {
  return {
    onCollapseChange: dis(createCollapse)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
