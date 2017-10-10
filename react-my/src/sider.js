import { Menu, Icon} from 'antd';
import React, { Component } from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
    
    render() {
        return (
            <Menu
             style={{width:240}}
             defaultSelectedKeys={['1']}
             defaultOpenKeys={['sub1']}
             mode="inline">
                <SubMenu key="sub1" tittle={<span><Icon type="mail"/><span>Nai one</span></span>}>
                    <MenuItemGroup key="g1"></MenuItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sider;