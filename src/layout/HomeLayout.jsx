import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ToggleLang from '../components/ToggleLang';
import Cookies from 'js-cookie';
import { addPrefixName } from '../utils/index';
import { setUserInfo } from '../store/userInfo';

const { Header, Content, Sider } = Layout;
const sideMenuItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const HomeLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);

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
	const onTopMenuItemsEvent = ({ key}) => {
		if (key === 'logout') {
			Cookies.remove(addPrefixName('accessToken'));
			dispatch(setUserInfo({
				name: ''
			}))
			navigate('/login');
		}
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
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{
							height: '100%',
							borderRight: 0,
							overflowY: 'auto',
						}}
						items={sideMenuItems}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
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
						className=" p-6 m-0"
						style={{
							minHeight: 280,
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
