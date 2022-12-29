import React, { lazy } from 'react';
import { useRoutes } from "react-router-dom";
import LoginRoutes from './login';

const ErrorPage = lazy(() => import('./../error-page'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const PageIndex = lazy(() => import('./../pages/PageIndex'));

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
        element: <PageIndex />,
        meta: {
          title: '首页'
        }
      },
    ],
  },
  ...LoginRoutes
];

const Router = () => {
	const routes = useRoutes(routerList);
	return routes;
};

export default Router;
