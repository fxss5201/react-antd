import React, { lazy } from 'react';

const LoginLayout = lazy(() => import('./../layout/LoginLayout'));
const LoginIndex = lazy(() => import('../pages/login/index'));
const ForgetPassword = lazy(() => import('../pages/login/ForgetPassword'));
const Register = lazy(() => import('../pages/login/Register'));

const LoginRoutes = [
  {
    path: '/login',
    element: <LoginLayout />,
    meta: {
      // 指定是否在 menu 菜单中展示
      hideInMenu: true
    },
    children: [
      {
        index: true,
        path: '/login',
        element: <LoginIndex />,
        meta: {
          // 页面标题
          title: 'Log in',
          // 页面标题是否支持多语言
          titleTranslation: true,
        }
      },
      {
        path: '/login/password',
        element: <ForgetPassword />,
        meta: {
          title: 'Reset password',
          titleTranslation: true,
        }
      },
      {
        path: '/login/register',
        element: <Register />,
        meta: {
          title: 'Register',
          titleTranslation: true,
        }
      }
    ],
  }
]

export default LoginRoutes;
