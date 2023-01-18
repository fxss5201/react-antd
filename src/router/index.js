import React, { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import LoginRoutes from './login';
import { BankOutlined, CopyOutlined, CodeOutlined, AreaChartOutlined, AntDesignOutlined, UserOutlined, KeyOutlined } from '@ant-design/icons';

const ErrorPage = lazy(() => import('./../error-page'));
const AllLayout = lazy(() => import('./../layout/AllLayout'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
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
const Page403 = lazy(() => import('../pages/pageCommon/Page403'));
const Page404 = lazy(() => import('../pages/pageCommon/Page404'));
const Page500 = lazy(() => import('../pages/pageCommon/Page500'));

export const routerList = [
  {
    path: "/",
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
            path: '/access',
            redirect: '/access/pageNormal',
            meta: {
              title: '权限演示',
              icon: <KeyOutlined />,
            },
            children: [
              {
                path: '/access/pageNormal',
                element: <PageNormal />,
                requiresAuth: true,
                watermark: true,
                access: 'normal',
                meta: {
                  title: '普通用户',
                }
              },
              {
                path: '/access/pageMiddle',
                element: <PageMiddle />,
                requiresAuth: true,
                watermark: true,
                access: 'middle',
                meta: {
                  title: '中级用户',
                }
              },
              {
                path: '/access/pageAdmin',
                element: <PageAdmin />,
                requiresAuth: true,
                watermark: true,
                access: 'admin',
                meta: {
                  title: '管理员',
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
