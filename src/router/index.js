import React, { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import LoginRoutes from './login';
import { BankOutlined, CopyOutlined, CodeOutlined, AreaChartOutlined } from '@ant-design/icons';

const ErrorPage = lazy(() => import('./../error-page'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const PageIndex = lazy(() => import('./../pages/PageIndex'));
const PageCopy = lazy(() => import('../pages/pageCopy/PageCopy'));
const PageCode = lazy(() => import('../pages/pageCode/PageCode'));
const PageEcharts = lazy(() => import('../pages/pageEcharts/PageEcharts'));

export const routerList = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    meta: {
      // 是否需要用户登录权限
      requiresAuth: true,
    },
    children: [
      {
        index: true,
        path: '/',
        element: <PageIndex />,
        meta: {
          title: '首页',
          icon: <BankOutlined />,
        }
      },
      {
        path: '/pageCopy',
        element: <PageCopy />,
        meta: {
          title: '复制粘贴',
          icon: <CopyOutlined />,
        }
      },
      {
        path: '/pageCode',
        element: <PageCode />,
        meta: {
          title: '代码渲染',
          icon: <CodeOutlined />,
        }
      },
      {
        path: '/pageEcharts',
        element: <PageEcharts />,
        meta: {
          title: 'echarts图表',
          icon: <AreaChartOutlined />,
        }
      },
    ],
  },
  ...LoginRoutes
];

const router = createHashRouter(routerList);

export default router;
