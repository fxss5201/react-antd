import React, { useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined, LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import MyIcon from './../components/MyIcon';
import { connect } from 'react-redux';

const { Header, Content, Sider } = Layout;
const items1 = [
  // {
  //   key: 'locale',
  //   label: `语言`,
  // }
];
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
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

const mapStateToProps = state => ({
  locale: state.locale
})
const mapDispatchToProps = dispatch => ({
  changeLocal: value => dispatch({
		type: 'CHANGE_LOCALE',
		value
	})
})

const HomeLayout = ({locale, changeLocal}) => {
  const [collapsed, setCollapsed] = useState(false);
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
				<div className='flex items-center cursor-pointer text-gray-400 hover:text-white' onClick={() => changeLocal(locale === 'zhCN' ? 'enGb' : 'zhCN')}>
					<MyIcon type={locale === 'zhCN' ? 'icon-zhongyingwenqiehuan-zhongwen' : 'icon-zhongyingwenqiehuan-yingwen' } className=' text-24' />
					<span className='ml-1'>{locale === 'zhCN' ? '中文' : '英文' }</span>
				</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
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
          items={items2}
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeLayout);
