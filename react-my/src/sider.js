import { Menu, Icon } from 'antd';
import React, { Component } from 'react';

function Sider(props) {
    return (
        <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
                <Menu.Item key="user">
                    <Icon type="user" /> <span className="nav-text">导航一</span>
                </Menu.Item>
                <Menu.Item key="setting">
                    <Icon type="setting" /> <span className="nav-text">导航二</span>
                </Menu.Item>
                <Menu.Item key="laptop">
                    <Icon type="laptop" /> <span className="nav-text">导航三</span>
                </Menu.Item>
                <Menu.Item key="notification">
                    <Icon type="notification" /> <span className="nav-text">导航四</span>
                </Menu.Item>
                <Menu.Item key="folder">
                    <Icon type="folder" /> <span className="nav-text">导航五</span>
                </Menu.Item>
            </Menu>
            <div className="ant-aside-action" onClick={props.onCollapseChange}>
                {props.collapse ? <Icon type="right" /> : <Icon type="left" />}
            </div>
        </aside>
    );
}

export default Sider;