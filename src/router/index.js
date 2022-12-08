import React, { lazy } from 'react';
import {
  createHashRouter
} from "react-router-dom";
import LoginRoutes from './login';

const ErrorPage = lazy(() => import('./../error-page'));
const HomeLayout = lazy(() => import('./../layout/HomeLayout'));
const PageIndex = lazy(() => import('./../page/PageIndex'));

const router = createHashRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PageIndex />,
      },
    ],
  },
  ...LoginRoutes
]);

export default router;
