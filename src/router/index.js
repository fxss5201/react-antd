import React, { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import LoginRoutes from './login';
import { BankOutlined, CopyOutlined, CodeOutlined, AreaChartOutlined, AntDesignOutlined } from '@ant-design/icons';

const ErrorPage = lazy(() => import('./../error-page'));
const AllLayout = lazy(() => import('./../layout/AllLayout'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const PageAnalysis = lazy(() => import('../pages/pageIndex/PageAnalysis'));
const PageWorkplace = lazy(() => import('../pages/pageIndex/PageWorkplace'));
const PageCopy = lazy(() => import('../pages/pageCopy/PageCopy'));
const PageCode = lazy(() => import('../pages/pageCode/PageCode'));
const PageEcharts = lazy(() => import('../pages/pageEcharts/PageEcharts'));
const PageDraggableTabs = lazy(() => import('../pages/pageAntd/PageDraggableTabs'));

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
        meta: {
          // 是否需要用户登录权限
          requiresAuth: true,
        },
        children: [
          {
            path: '/home',
            redirect: "/home/analysis",
            meta: {
              title: '首页',
              icon: <BankOutlined />,
            },
            children: [
              {
                path: '/home/analysis',
                element: <PageAnalysis />,
                meta: {
                  title: '分析页',
                  requiresAuth: true,
                  // [水印组件](https://ant-design.antgroup.com/components/watermark-cn#watermark)
                  // 设置页面是否支持水印，支持 Boolean 和 Array ，如果为 Boolean 默认配置水印组件的 content 为 config.watermark，如果为 Array ，则直接覆盖设置为水印组件的 content
                  watermark: true,
                }
              },
              {
                path: '/home/workplace',
                element: <PageWorkplace />,
                meta: {
                  title: '工作台',
                  requiresAuth: true,
                  watermark: ['aaa', '工作台'],
                }
              }
            ]
          },
          {
            path: '/pageCopy',
            element: <PageCopy />,
            meta: {
              title: '复制粘贴',
              icon: <CopyOutlined />,
              watermark: true,
              isHideBreadcrumb: true,
            }
          },
          {
            path: '/pageCode',
            element: <PageCode />,
            meta: {
              title: '代码渲染',
              icon: <CodeOutlined />,
              isHideBreadcrumb: true,
              isHideTabs: true
            }
          },
          {
            path: '/pageEcharts',
            element: <PageEcharts />,
            meta: {
              title: 'echarts图表',
              icon: <AreaChartOutlined />,
              isHideBreadcrumb: true,
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
        ],
      },
      ...LoginRoutes
    ]
  }
];

const router = createHashRouter(routerList);

export default router;
