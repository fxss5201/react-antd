import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ToggleLang from '../components/ToggleLang';
import Cookies from 'js-cookie';
import { addPrefixName } from '../utils/index';
import { setUserInfo } from '../store/userInfo';
import { routerList } from './../router/index';
import { searchMenuRoutes, menuRoutesToMenuItems } from './../utils/router';

const { Header, Content, Sider } = Layout;

let sideMenuList = searchMenuRoutes(routerList);
if (sideMenuList.length && sideMenuList[0]?.children?.[0]?.index) {
	sideMenuList = sideMenuList[0].children
}
const sideMenuItems = menuRoutesToMenuItems(sideMenuList);

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);
	const location = useLocation();

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
		<Layout>
			<Header className="flex">
				<div className="flex-shrink-0 w-32 h-8 m-4 ml-0 bg-gray-500" />
				<div className="flex items-center justify-center">
					<div className="text-gray-200 px-3 text-16 hover:text-white cursor-pointer">
						{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							onClick: () => setCollapsed(!collapsed),
						})}
					</div>
				</div>
				<div className='flex-auto flex items-center justify-end'>
					<ToggleLang addClass="text-gray-400 hover:text-white" />
					<Menu theme="dark" mode="horizontal" items={topMenuItems} onClick={onTopMenuItemsEvent} />
				</div>
			</Header>
			<Layout>
				<Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={[location.pathname]}
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
					style={{
						padding: '0 24px 24px',
						height: 'calc(100vh - 64px)',
						overflow: 'auto'
					}}
				>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}
					>
						<Breadcrumb.Item>Home</Breadcrumb.Item>
						<Breadcrumb.Item>List</Breadcrumb.Item>
						<Breadcrumb.Item>App</Breadcrumb.Item>
					</Breadcrumb>
					<Content
						className="m-0"
						style={{
							minHeight: 'auto',
						}}
					>
						<Outlet />
					</Content>
				</Layout>
			</Layout>
		</Layout>
  )
};

export default HomeLayout;
