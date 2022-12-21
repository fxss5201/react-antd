import React, { lazy } from 'react';

const LoginLayout = lazy(() => import('./../layout/LoginLayout'));
const LoginIndex = lazy(() => import('../pages/login/index'));
const ForgetPassword = lazy(() => import('../pages/login/ForgetPassword'));
const Register = lazy(() => import('../pages/login/Register'));

const LoginRoutes = [
  {
    path: '/login',
    element: <LoginLayout />,
    children: [
      {
        index: true,
        element: <LoginIndex />,
      },
      {
        path: 'password',
        element: <ForgetPassword />,
      },
      {
        path: 'register',
        element: <Register />,
      }
    ],
  }
]

export default LoginRoutes;
