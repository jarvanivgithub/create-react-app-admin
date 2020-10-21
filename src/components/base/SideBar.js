import React from 'react';
import { Menu } from 'antd';
import SIDE_BAR_LIST from '../../configs/authorized/sideBarList';
import { useHistory } from 'react-router-dom';

import { DEFAULT_ROUTE } from 'configs/authorized/sideBarList';

const { SubMenu } = Menu;

const SideBar = () => {
    const menu = SIDE_BAR_LIST;
    const history = useHistory();
    const {
        location: { pathname },
    } = history;

    return (
        <Menu
            theme="dark"
            mode="inline"
            defaultOpenKeys={['sub0']}
            defaultSelectedKeys={[pathname.split('/')[1] || DEFAULT_ROUTE]}
            onClick={(e) => {
                history.push(`/${e.key}`);
            }}
        >
            {menu.map((item, index) => {
                if (!(item.children && item.children.length)) {
                    return (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.title}
                        </Menu.Item>
                    );
                }
                const key = `sub${index}`;
                return (
                    <SubMenu key={key} title={item.title} icon={item.icon}>
                        {item.children.map((subItem) => {
                            return (
                                <Menu.Item key={subItem.key} icon={subItem.icon}>
                                    {subItem.title}
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                );
            })}
        </Menu>
    );
};

export default SideBar;
