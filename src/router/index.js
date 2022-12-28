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
      requiresAuth: true,
    },
    children: [
      {
        index: true,
        element: <PageIndex />,
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
