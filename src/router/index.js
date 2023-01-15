import React, { lazy } from 'react';
import { createHashRouter } from "react-router-dom";
import LoginRoutes from './login';
import { BankOutlined, CopyOutlined, CodeOutlined, AreaChartOutlined } from '@ant-design/icons';

const ErrorPage = lazy(() => import('./../error-page'));
const AllLayout = lazy(() => import('./../layout/AllLayout'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const PageAnalysis = lazy(() => import('../pages/pageIndex/PageAnalysis'));
const PageWorkplace = lazy(() => import('../pages/pageIndex/PageWorkplace'));
const PageCopy = lazy(() => import('../pages/pageCopy/PageCopy'));
const PageCode = lazy(() => import('../pages/pageCode/PageCode'));
const PageEcharts = lazy(() => import('../pages/pageEcharts/PageEcharts'));

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
                }
              },
              {
                path: '/home/workplace',
                element: <PageWorkplace />,
                meta: {
                  title: '工作台',
                  requiresAuth: true,
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
    ]
  }
];

const router = createHashRouter(routerList);

export default router;
