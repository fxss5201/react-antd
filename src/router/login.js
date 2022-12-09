import React, { lazy } from 'react';

const LoginLayout = lazy(() => import('./../layout/LoginLayout'));
const LoginIndex = lazy(() => import('../page/login/index'));
const ForgetPassword = lazy(() => import('../page/login/ForgetPassword'));
const Register = lazy(() => import('../page/login/Register'));

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
