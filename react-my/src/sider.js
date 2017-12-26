import { Menu, Icon } from 'antd';
import React from 'react';
import { Link }  from 'react-router'

{/* <IndexLink to="/">Home</IndexLink> */}

function Sider(props) {
    return (
        <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
                <Menu.Item key="user">
                    <Link><Icon type="user" /> <span className="nav-text">导航一</span></Link>
                </Menu.Item>
                <Menu.Item key="setting">
                    <Link><Icon type="setting" /> <span className="nav-text">导航二</span></Link>
                </Menu.Item>
            </Menu>
            <div className="ant-aside-action" onClick={props.onCollapseChange}>
                {props.collapse ? <Icon type="right" /> : <Icon type="left" />}
            </div>
        </aside>
    );
}

export default Sider;