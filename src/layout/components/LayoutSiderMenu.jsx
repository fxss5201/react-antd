import { Menu } from 'antd';
import cloneDeep from 'lodash.clonedeep';
import { useNavigate, useLocation } from 'react-router-dom';
import { routerList } from '../../router/index';
import { searchShowMenuRoutes, showMenuRoutesToMenuItems, showMenuRoutesFilterAccess } from '../../utils/router';

let sideMenuList = searchShowMenuRoutes(routerList[0].children);
sideMenuList = sideMenuList[0]?.children;

const LayoutSiderMenu = ({userInfo, sideMenuDefaultOpenKeys, sideMenuOpenKeys, setSideMenuOpenKeys}) => {
	const location = useLocation();
  const navigate = useNavigate();
  const sideMenuListClone = cloneDeep(sideMenuList);
	const sideMenuListFilterAccess = showMenuRoutesFilterAccess(sideMenuListClone, userInfo.access);
	const sideMenuItems = showMenuRoutesToMenuItems(sideMenuListFilterAccess);

	const onSideMenuItemsEvent = ({ key }) => {
		navigate(key);
	}

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={sideMenuDefaultOpenKeys}
      openKeys={sideMenuOpenKeys}
      defaultSelectedKeys={[location.pathname]}
      selectedKeys={[location.pathname]}
      style={{
        minHeight: '100%',
        borderRight: 0,
        overflowY: 'auto',
      }}
      items={sideMenuItems}
      onClick={onSideMenuItemsEvent}
      onOpenChange={(openKeys) => setSideMenuOpenKeys(openKeys)}
    />
  )
}

export default LayoutSiderMenu;
