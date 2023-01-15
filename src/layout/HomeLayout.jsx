import React, { useState, Suspense } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Spin, Breadcrumb } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ToggleLang from '../components/ToggleLang';
import Cookies from 'js-cookie';
import { addPrefixName } from '../utils/index';
import { searchRoute } from '../utils/router';
import { setUserInfo } from '../store/userInfo';
import { routerList } from './../router/index';
import { searchShowMenuRoutes, showMenuRoutesToMenuItems } from './../utils/router';
import config from '../config/index';

const { Header, Content, Sider } = Layout;

let sideMenuList = searchShowMenuRoutes(routerList[0].children);
sideMenuList = sideMenuList[0]?.children;
const sideMenuItems = showMenuRoutesToMenuItems(sideMenuList);

const HomeLayout = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);
	const location = useLocation();
	const defaultOpenKeys = location.pathname.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`);
	const breadcrumbList = defaultOpenKeys.map(x => searchRoute(x, routerList[0].children));

	const topMenuItems = [
		{
			key: 'user',
			label: userInfo.name,
			children: [
				{
					key: 'logout',
					label: '退出登录',
				}
			]
		}
	];
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const onTopMenuItemsEvent = ({ key }) => {
		if (key === 'logout') {
			Cookies.remove(addPrefixName('accessToken'));
			dispatch(setUserInfo({
				name: ''
			}))
			navigate('/login');
		}
	}
	const onSideMenuItemsEvent = ({ key }) => {
		navigate(key);
	}

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
						{config.isShowToggleLang && <ToggleLang addClass="text-gray-400 hover:text-white" />}
						<Menu theme="dark" mode="horizontal" items={topMenuItems} onClick={onTopMenuItemsEvent} />
					</div>
				</Header>
				<Layout>
					<Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{position: 'fixed',left: 0,top: '64px',bottom: 0,zIndex: 10}}>
						<Menu
							theme="dark"
							mode="inline"
							defaultOpenKeys={defaultOpenKeys}
							defaultSelectedKeys={[location.pathname]}
							selectedKeys={[location.pathname]}
							style={{
								minHeight: '100%',
								borderRight: 0,
								overflowY: 'auto',
							}}
							items={sideMenuItems}
							onClick={onSideMenuItemsEvent}
						/>
					</Sider>
					<Layout
						className='bg-white'
						style={{
							margin: collapsed ? '64px 0 0 80px' : '64px 0 0 200px',
							boxSizing: 'border-box',
							padding: '24px',
						}}
					>
						<Suspense fallback={
							<Spin tip="加载中..." size="large">
								<div className='w-full' style={{ height: 'calc(100vh - 64px - 48px)' }}></div>
							</Spin>
						}>
							<Content
								style={{
									minHeight: 'auto',
								}}
							>
								{	config.isShowBreadcrumb && 
									(<Breadcrumb className='mb-6'>
										{breadcrumbList.map((item, index, arr) => {
											return index === arr.length - 1 ? (<Breadcrumb.Item key={item.path}>{item.meta?.icon}<span>{item.meta?.title === t(item.meta?.title) ? item.meta?.title : t(item.meta?.title)}</span></Breadcrumb.Item>) : (<Breadcrumb.Item key={item.path} href={item.path}>{item.meta?.icon}<span>{item.meta?.title === t(item.meta?.title) ? item.meta?.title : t(item.meta?.title)}</span></Breadcrumb.Item>)
										})}
									</Breadcrumb>)
								}
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
