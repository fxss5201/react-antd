import React, { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import KeepAlive from 'react-activation';
import LoginRoutes from './login';
import { BankOutlined, CopyOutlined, CodeOutlined, AreaChartOutlined, AntDesignOutlined, UserOutlined, KeyOutlined, ApiOutlined, LockOutlined } from '@ant-design/icons';
import PageOutlet from '../pages/pageCommon/PageOutlet';

// 如果懒加载的话第一次点击不能渲染出组件,要缓存的路由不能懒加载！
// const PageMockUserList = lazy(() => import('../pages/pageMock/PageMockUserList'));
import PageMockUserList from '../pages/pageMock/PageMockUserList';
import PageMockUserListPost from '../pages/pageMock/PageMockUserListPost';
import PageKeepAlive from '../pages/pageKeepAlive/PageKeepAlive';

const ErrorPage = lazy(() => import('./../error-page'));
const AllLayout = lazy(() => import('./../layout/AllLayout'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const Page403 = lazy(() => import('../pages/pageCommon/Page403'));
const Page404 = lazy(() => import('../pages/pageCommon/Page404'));
const Page500 = lazy(() => import('../pages/pageCommon/Page500'));
const PageAnalysis = lazy(() => import('../pages/pageIndex/PageAnalysis'));
const PageWorkplace = lazy(() => import('../pages/pageIndex/PageWorkplace'));
const PageCopy = lazy(() => import('../pages/pageCopy/PageCopy'));
const PageCode = lazy(() => import('../pages/pageCode/PageCode'));
const PageEcharts = lazy(() => import('../pages/pageEcharts/PageEcharts'));
const PageDraggableTabs = lazy(() => import('../pages/pageAntd/PageDraggableTabs'));
const PageUserInfo = lazy(() => import('../pages/pageUser/PageUserInfo'));
const PageUsers = lazy(() => import('../pages/pageUser/PageUsers'));
const PageNormal = lazy(() => import('../pages/pageAccess/PageNormal'));
const PageMiddle = lazy(() => import('../pages/pageAccess/PageMiddle'));
const PageAdmin = lazy(() => import('../pages/pageAccess/PageAdmin'));
const PageMockUsers = lazy(() => import('../pages/pageMock/PageMockUsers'));
const PageKeepAliveComponent = lazy(() => import('../pages/pageKeepAlive/PageKeepAliveComponent'));

export const routerList = [
  {
    path: "/",
    // 使用 redirect 时，并且含有 element 时，element 中必须包含 <Outlet />
    redirect: "/home/analysis",
    errorElement: <ErrorPage />,
    element: <AllLayout />,
    children: [
      {
        path: "/",
        redirect: "/home/analysis",
        element: <HomeLayout />,
        // 是否需要用户登录权限
        requiresAuth: true,
        children: [
          {
            path: '/home',
            redirect: '/home/analysis',
            element: <PageOutlet />,
            meta: {
              title: 'dashboard',
              icon: <BankOutlined />,
            },
            children: [
              {
                path: '/home/analysis',
                element: <PageAnalysis />,
                requiresAuth: true,
                // [水印组件](https://ant-design.antgroup.com/components/watermark-cn#watermark)
                // 设置页面是否支持水印，支持 Boolean 和 Array ，如果为 Boolean 默认配置水印组件的 content 为 config.watermark，如果为 Array ，则直接覆盖设置为水印组件的 content
                watermark: true,
                meta: {
                  title: '首页',
                }
              },
              {
                path: '/home/workplace',
                element: <PageWorkplace />,
                requiresAuth: true,
                watermark: ['aaa', '工作台'],
                meta: {
                  title: '工作台',
                }
              }
            ]
          },
          {
            path: '/pageCopy',
            element: <PageCopy />,
            watermark: true,
            isHideBreadcrumb: true,
            meta: {
              title: '复制粘贴',
              icon: <CopyOutlined />,
            }
          },
          {
            path: '/pageCode',
            element: <PageCode />,
            isHideBreadcrumb: true,
            isHideTabs: true,
            meta: {
              title: '代码渲染',
              icon: <CodeOutlined />,
            }
          },
          {
            path: '/pageEcharts',
            element: <PageEcharts />,
            isHideBreadcrumb: true,
            meta: {
              title: 'echarts图表',
              icon: <AreaChartOutlined />,
            }
          },
          {
            path: '/antd',
            redirect: "/antd/pageDraggableTabs",
            element: <PageOutlet />,
            meta: {
              title: 'antd',
              icon: <AntDesignOutlined />,
            },
            children: [
              {
                path: '/antd/pageDraggableTabs',
                element: <PageDraggableTabs />,
                meta: {
                  title: '编辑拖拽Tabs',
                }
              },
            ]
          },
          {
            path: '/user',
            redirect: '/user/userInfo',
            element: <PageOutlet />,
            meta: {
              title: '用户中心',
              icon: <UserOutlined />,
            },
            children: [
              {
                path: '/user/userInfo',
                element: <PageUserInfo />,
                requiresAuth: true,
                watermark: true,
                meta: {
                  title: '个人中心',
                }
              },
              {
                path: '/user/users',
                element: <PageUsers />,
                requiresAuth: true,
                watermark: true,
                meta: {
                  title: '用户管理',
                }
              }
            ]
          },
          {
            path: '/mock',
            redirect: '/mock/users',
            element: <PageOutlet />,
            meta: {
              title: 'mock示例',
              icon: <ApiOutlined />,
            },
            children: [
              {
                path: '/mock/users',
                element: <PageMockUsers />,
                requiresAuth: true,
                watermark: true,
                meta: {
                  title: 'mock用户',
                }
              },
              {
                path: '/mock/userList',
                // KeepAlive需要添加唯一的id
                // saveScrollPosition保存滚动位置：https://github.com/CJY0208/react-activation/blob/master/README_CN.md#%E4%BF%9D%E5%AD%98%E6%BB%9A%E5%8A%A8%E4%BD%8D%E7%BD%AE%E9%BB%98%E8%AE%A4%E4%B8%BA-true
                element: <KeepAlive id="PageMockUserList" saveScrollPosition="screen"><PageMockUserList /></KeepAlive>,
                requiresAuth: true,
                watermark: true,
                meta: {
                  title: 'mock列表',
                }
              },
              {
                path: '/mock/userListPost',
                element: <KeepAlive id="PageMockUserListPost" saveScrollPosition="screen"><PageMockUserListPost /></KeepAlive>,
                requiresAuth: true,
                watermark: true,
                meta: {
                  title: 'mock列表',
                }
              },
            ]
          },
          {
            path: '/access',
            redirect: '/access/pageNormal',
            element: <PageOutlet />,
            meta: {
              title: '权限演示',
              icon: <KeyOutlined />,
            },
            children: [
              {
                path: '/access/pageNormal',
                element: <PageNormal />,
                requiresAuth: true,
                // Object 配置仅支持 user 属性数组配置，且自行保证配置的都是 store.getState().userInfo.value 中的 key 值
                watermark: {
                  user: ['name', 'header', 'name']
                },
                access: 'normal',
                meta: {
                  title: 'normal用户',
                }
              },
              {
                path: '/access/pageMiddle',
                element: <PageMiddle />,
                watermark: {
                  user: ['name']
                },
                access: 'middle',
                meta: {
                  title: 'middle用户',
                }
              },
              {
                path: '/access/pageAdmin',
                element: <PageAdmin />,
                requiresAuth: true,
                watermark: {
                  user: ['name']
                },
                access: 'admin',
                meta: {
                  title: 'admin用户',
                }
              }
            ]
          },
          {
            path: '/keepalive',
            redirect: '/keepalive/keepalive',
            element: <PageOutlet />,
            meta: {
              title: '缓存示例',
              icon: <LockOutlined />,
            },
            children: [
              {
                path: '/keepalive/keepalive',
                element: <KeepAlive id="PageKeepAlive" saveScrollPosition="screen"><PageKeepAlive /></KeepAlive>,
                meta: {
                  title: '路由缓存',
                }
              },
              {
                path: '/keepalive/keepalivecomponent',
                element: <PageKeepAliveComponent />,
                meta: {
                  title: '组件缓存',
                }
              }
            ]
          },
          {
            path: '/403',
            element: <Page403 />,
            hideInMenu: true,
            isHideBreadcrumb: true,
            meta: {
              title: '403',
            }
          },
          {
            path: '/404',
            element: <Page404 />,
            hideInMenu: true,
            isHideBreadcrumb: true,
            meta: {
              title: '404',
            }
          },
          {
            path: '/500',
            element: <Page500 />,
            hideInMenu: true,
            isHideBreadcrumb: true,
            meta: {
              title: '500',
            }
          }
        ],
      },
      ...LoginRoutes
    ]
  }
];

const router = createHashRouter(routerList);

export default router;
