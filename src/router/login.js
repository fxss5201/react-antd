import React, { lazy } from 'react';
import i18n from './../i18n';

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
        element: <LoginIndex />,
        meta: {
          // 页面标题
          title: i18n.t('Log in'),
        }
      },
      {
        path: '/login/password',
        element: <ForgetPassword />,
        meta: {
          title: i18n.t('Reset password'),
        }
      },
      {
        path: '/login/register',
        element: <Register />,
        meta: {
          title: i18n.t('Register'),
        }
      }
    ],
  }
]

export default LoginRoutes;
