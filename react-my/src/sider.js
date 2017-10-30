import { Menu, Icon, Button } from 'antd';
import React, { Component } from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
    constructor(props) {
        super(props);
        this.state = {collapsed: false};
    }

    toggleCollapsed() {
        this.setState({collapsed: !this.state.collapsed});
    }
    
    render() {
        return (
            <div style={{width:240}}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu 
                  style={{width:240}}
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  mode="inline"
                  theme="dark"
                  inlineCollapsed={this.state.collapsed}>
                    <Menu.Item key="1">
                        <Icon type="pie-chart"></Icon>
                        <span>Option1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop"></Icon>
                        <span>Option2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon typ="inbox"></Icon>
                        <span>Option3</span>
                    </Menu.Item>
                    <SubMenu key="sub1" tittle={<span><Icon type="mail"/><span>Nai one</span></span>}>
                        {/* <MenuItemGroup key="g1"></MenuItemGroup> */}
                        <Menu.Item key="5">Option5</Menu.Item>
                        <Menu.Item key="6">Option6</Menu.Item>
                        <Menu.Item key="7">Option7</Menu.Item>
                        <Menu.Item key="8">Option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" tittle={<span><Icon type="appstore"></Icon><span>Nai two</span></span>}>
                        <Menu.Item key="9">Option9</Menu.Item>
                        <SubMenu key="sub3" tittle="submenu">
                            <Menu.Item key="10">
                                <Icon type="file-jpg"></Icon>
                                <span>sub1</span>
                            </Menu.Item>
                            <Menu.Item key="11">
                                <Icon type="file-png"></Icon>
                                <span>sub1</span>
                            </Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default Sider;