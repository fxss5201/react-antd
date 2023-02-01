import React, { useState, Suspense } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchRoute } from '../utils/router';
import { routerList } from './../router/index';
import config from '../config/index';
import LayoutTabs from './components/LayoutTabs';
import LayoutBreadcrumb from './components/LayoutBreadcrumb';
import LayoutSiderMenu from './components/LayoutSiderMenu';
import LayoutHeaderRight from './components/LayoutHeaderRight';

const { Header, Content, Sider } = Layout;

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);
	const location = useLocation();
	const sideMenuDefaultOpenKeys = location.pathname.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`);
	const [sideMenuOpenKeys, setSideMenuOpenKeys] = useState(sideMenuDefaultOpenKeys);

	const route = searchRoute(location.pathname, routerList[0].children);
	const isShowBreadcrumb = config.isShowBreadcrumb && !route.isHideBreadcrumb;
	const isShowTabs = config.isShowTabs && !route.isHideTabs;

  return (
		<>
			<Layout>
				<Header className="flex" style={{position: 'fixed',left: 0,right: 0,height: '64px',zIndex: 10}}>
					<div className="flex-shrink-0 w-32 h-8 my-4 bg-gray-500" />
					<div className="flex items-center justify-center">
						<div className="text-gray-200 px-4 text-16 hover:text-white cursor-pointer">
							{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								onClick: () => setCollapsed(!collapsed),
							})}
						</div>
					</div>
					<div className='flex-auto flex items-center justify-end'>
						<LayoutHeaderRight userInfo={userInfo} />
					</div>
				</Header>
				<Layout>
					<Sider collapsed={collapsed} width={200} style={{position: 'fixed',left: 0,top: '64px',bottom: 0,zIndex: 10, overflow: 'auto'}}>
						<LayoutSiderMenu 
							userInfo={userInfo}
							sideMenuDefaultOpenKeys={sideMenuDefaultOpenKeys}
							sideMenuOpenKeys={sideMenuOpenKeys}
							setSideMenuOpenKeys={setSideMenuOpenKeys}
						/>
					</Sider>
					<Layout
						className='bg-white'
						style={{
							margin: collapsed ? '64px 0 0 80px' : '64px 0 0 200px',
							boxSizing: 'border-box',
							minHeight: 'calc(100vh - 64px)',
						}}
					>
						{isShowTabs && <LayoutTabs route={route} collapsed={collapsed} sideMenuOpenKeys={sideMenuOpenKeys} setSideMenuOpenKeys={setSideMenuOpenKeys} />}
						<Suspense fallback={
							<Spin tip="加载中..." size="large">
								<div className='w-full' style={{ height: 'calc(100vh - 64px - 48px)' }}></div>
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
