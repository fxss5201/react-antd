import React, { useState, Suspense, useEffect, useRef } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Spin, Popover, theme, Typography } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchRoute } from '../utils/router';
import { routerList } from './../router/index';
import config from '../config/index';
import LayoutTabs from './components/LayoutTabs';
import LayoutBreadcrumb from './components/LayoutBreadcrumb';
import LayoutSiderMenu from './components/LayoutSiderMenu';
import LayoutHeaderRight from './components/LayoutHeaderRight';
import { isElementInView } from '../utils';

const { Header, Content, Sider } = Layout;
const { useToken } = theme;
const { Text } = Typography;

const HomeLayout = () => {
  const { token } = useToken();
  const { colorBgContainer } = token;
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);
  const themeInfo = useSelector(state => state.themeInfo.value);
	const headerHeight = themeInfo.algorithm === 'compactAlgorithm' ? '56px' : '64px';
	const sideMenuWidth = collapsed ? '80px' : '200px';

	const location = useLocation();
	const sideMenuDefaultOpenKeys = location.pathname.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`);
	const [sideMenuOpenKeys, setSideMenuOpenKeys] = useState(sideMenuDefaultOpenKeys);

	// 重定向之后，左侧菜单选中项移至视野中
	const timeOut = useRef();
	useEffect(() => {
		timeOut.current && clearTimeout(timeOut.current);
		timeOut.current = setTimeout(() => {
			const antMenuItemSelected = document.querySelector('.ant-menu-item-selected');
			if (antMenuItemSelected && !isElementInView(antMenuItemSelected, document.querySelector('#sideMenuBox'))) {
				antMenuItemSelected?.scrollIntoView();
			}
		}, 88);
	}, [location])

	const route = searchRoute(location.pathname, routerList[0].children);
	const isShowBreadcrumb = route.hasOwnProperty('isShowBreadcrumb') ? route.isShowBreadcrumb : config.isShowBreadcrumb;
	const isShowTabs = route.hasOwnProperty('isShowTabs') ? route.isShowTabs : config.isShowTabs;

  return (
		<>
			<Layout>
				<Header className="flex items-center" style={{position: 'fixed',left: 0,right: 0,height: headerHeight,zIndex: 10}}>
					<div className="flex-shrink-0 w-32 h-8 bg-gray-500" />
					<div className="flex items-center justify-center">
						<Popover placement="bottom" content={collapsed ? '展开菜单' : '收起菜单'}>
							<div className="px-4 text-16 cursor-pointer flex items-center" onClick={() => setCollapsed(!collapsed)}>
								<Text className='text-20 leading-none text-gray-300 hover:text-white'>
									{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
								</Text>
							</div>
						</Popover>
					</div>
					<div className='flex-auto flex items-center justify-end'>
						<LayoutHeaderRight userInfo={userInfo} />
					</div>
				</Header>
				<Layout>
					<Sider collapsed={collapsed} width={200} style={{position: 'fixed',left: 0,top: headerHeight,bottom: 0,zIndex: 10, overflow: 'auto'}} id="sideMenuBox">
						<LayoutSiderMenu 
							userInfo={userInfo}
							sideMenuDefaultOpenKeys={sideMenuDefaultOpenKeys}
							sideMenuOpenKeys={sideMenuOpenKeys}
							setSideMenuOpenKeys={setSideMenuOpenKeys}
						/>
					</Sider>
					<Layout
						style={{
							margin: `${headerHeight} 0 0 ${sideMenuWidth}`,
							boxSizing: 'border-box',
							minHeight: `calc(100vh - ${headerHeight})`,
							backgroundColor: colorBgContainer,
						}}
					>
						{isShowTabs && <LayoutTabs route={route} collapsed={collapsed} headerHeight={headerHeight} sideMenuWidth={sideMenuWidth} sideMenuOpenKeys={sideMenuOpenKeys} setSideMenuOpenKeys={setSideMenuOpenKeys} />}
						<Suspense fallback={
							<Spin tip="加载中..." size="large">
								<div className='w-full' style={{ height: `calc(100vh - ${headerHeight} - 48px)` }}></div>
							</Spin>
						}>
							<Content
								style={{
									padding: '24px',
								}}
							>
								{isShowBreadcrumb && <LayoutBreadcrumb userInfo={userInfo} sideMenuDefaultOpenKeys={sideMenuDefaultOpenKeys} />}
								<Outlet />
							</Content>
						</Suspense>
					</Layout>
				</Layout>
			</Layout>
		</>
  )
};

export default HomeLayout;
