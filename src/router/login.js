import React, { lazy } from 'react';

const LoginLayout = lazy(() => import('./../layout/LoginLayout'));
const LoginIndex = lazy(() => import('./../page/login/index'));

const LoginRoutes = [
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <LoginIndex />,
      },
    ],
  }
]

export default LoginRoutes;
