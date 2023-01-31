import React, { useState, Suspense } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Spin, Breadcrumb } from 'antd';
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cloneDeep from 'lodash.clonedeep';
import ToggleLang from '../components/ToggleLang';
import Cookies from 'js-cookie';
import { addPrefixName, getFinalValue } from '../utils/index';
import { searchRoute } from '../utils/router';
import { setUserInfo } from '../store/userInfo';
import { routerList } from './../router/index';
import { searchShowMenuRoutes, showMenuRoutesToMenuItems, showMenuRoutesFilterAccess } from './../utils/router';
import config from '../config/index';
import DocsLink from '../components/DocsLink';
import DraggableTabsHover from '../components/DraggableTabsHover';

const { Header, Content, Sider } = Layout;

let sideMenuList = searchShowMenuRoutes(routerList[0].children);
sideMenuList = sideMenuList[0]?.children;

const HomeLayout = () => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
	const userInfo = useSelector(state => state.userInfo.value);
	const location = useLocation();
	const sideMenuDefaultOpenKeys = location.pathname.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`);
	const [sideMenuOpenKeys, setSideMenuOpenKeys] = useState(sideMenuDefaultOpenKeys);

	const sideMenuListClone = cloneDeep(sideMenuList);
	const sideMenuListFilterAccess = showMenuRoutesFilterAccess(sideMenuListClone, userInfo.access);
	const sideMenuItems = showMenuRoutesToMenuItems(sideMenuListFilterAccess);

	const route = searchRoute(location.pathname, routerList[0].children);
	let breadcrumbList = []
	const isShowBreadcrumb = config.isShowBreadcrumb && !route.isHideBreadcrumb
	if (isShowBreadcrumb) {
		breadcrumbList = sideMenuDefaultOpenKeys.map(x => {
			const curRoute = searchRoute(x, routerList[0].children);
			if (curRoute.redirect) {
				return {
					...curRoute,
					path: curRoute.redirect
				}
			}
			return curRoute;
		});
	}

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
			window.localStorage.removeItem(addPrefixName('tabs'));
			dispatch(setUserInfo({
				name: '',
				access: []
			}))
			navigate('/login');
		}
	}
	const onSideMenuItemsEvent = ({ key }) => {
		navigate(key);
	}

	const isShowTabs = config.isShowTabs && !route.isHideTabs
	let localTabs
	if (isShowTabs) {
		localTabs = window.localStorage.getItem(addPrefixName('tabs'))
		if (!localTabs) {
			const homeRoute = searchRoute('/', routerList[0].children);
			localTabs = [
				{
					key: homeRoute.redirect || homeRoute.path,
					label: '首页',
					closable: false,
				}
			]
		} else {
			localTabs = JSON.parse(localTabs)
		}
		const tabsItemsKeys = localTabs.map(x => x.key)
		if (!tabsItemsKeys.includes(route.path)) {
			localTabs.push({
				key: route.path,
				label: getFinalValue(t, route.meta?.title)
			})
			window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(localTabs))
		}
	}
	const [tabsItems, setTabsItems] = useState(localTabs)
	if (localTabs && tabsItems.length !== localTabs.length) {
		setTabsItems(localTabs)
	}
	const addSideMenuOpenKeys = (key) => {
		const kyes = key.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`).slice(0, -1);
		setSideMenuOpenKeys([...sideMenuOpenKeys, ...kyes])
	}
	const tabsOnChange = (key) => {
		navigate(key);
		addSideMenuOpenKeys(key);
	};
	const tabsOnEdit = (targetKey, action) => {
		if (action === 'remove') {
			const curItems = cloneDeep(tabsItems)
      const curIndex = curItems.findIndex(x => x.key === targetKey)
			curItems.splice(curIndex, 1)
			window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(curItems))
			setTabsItems(curItems)
			if (targetKey === location.pathname) {
				const key = curItems[curIndex - 1].key;
				navigate(key);
				addSideMenuOpenKeys(key);
			}
    }
	}
	const tabsOnDragEndEvent = (keys) => {
    const list = [];
    keys.forEach(key => {
      list.push(tabsItems.find(x => x.key === key))
    });
    setTabsItems(list)
		window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(list))
  }
  const tabsCanDragEvent = (key) => {
    const cur = tabsItems.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
  }
  const tabsCanDropEvent = (key) => {
    const cur = tabsItems.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
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
						<DocsLink></DocsLink>
					</div>
				</Header>
				<Layout>
					<Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{position: 'fixed',left: 0,top: '64px',bottom: 0,zIndex: 10}}>
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
					</Sider>
					<Layout
						className='bg-white'
						style={{
							margin: collapsed ? '64px 0 0 80px' : '64px 0 0 200px',
							boxSizing: 'border-box',
						}}
					>
						{isShowTabs && (
							<div style={{height: '40px'}}>
								<DraggableTabsHover
									defaultActiveKey={location.pathname}
									activeKey={location.pathname}
									items={tabsItems}
									onChange={tabsOnChange}
									onEdit={tabsOnEdit}
									onDragEndEvent={tabsOnDragEndEvent}
									canDragEvent={tabsCanDragEvent}
									canDropEvent={tabsCanDropEvent}
									type="editable-card"
									hideAdd
									tabBarGutter={0}
									tabBarStyle={{margin: 0}}
									style={{position: 'fixed', top: '64px', left: collapsed ? '80px': '200px', right: 0, zIndex: 10}}
									className='bg-white' />
							</div>
						)}
						<Suspense fallback={
							<Spin tip="加载中..." size="large">
								<div className='w-full' style={{ height: 'calc(100vh - 64px - 48px)' }}></div>
							</Spin>
						}>
							<Content
								style={{
									minHeight: 'auto',
									padding: '24px',
								}}
							>
								{	isShowBreadcrumb && 
									(<Breadcrumb className='mb-6'>
										{breadcrumbList.map(item => {
											return <Breadcrumb.Item key={item.path}>{item.path === location.pathname ? <>{item.meta?.icon}{getFinalValue(t, item.meta?.title)}</> : <Link to={item.path}>{item.meta?.icon}{getFinalValue(t, item.meta?.title)}</Link>}</Breadcrumb.Item>
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
