import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { addPrefixName } from '../utils';
import Cookies from 'js-cookie';
import { searchRoute } from '../utils/router';
import { routerList } from './index';
import { useTitle } from 'ahooks';
import { useTranslation } from 'react-i18next';
import { Watermark } from 'antd';
import { getType } from '../utils';
const pkg = require('./../../package.json');

const RouterExtend = (props) => {
  const { t } = useTranslation();
	const location = useLocation();
  const route = searchRoute(location.pathname, routerList[0].children);

  let curRoute = route
  if (route.children && route.children[0]?.index) {
    curRoute = route.children[0]
  }
	const title = curRoute.meta?.title
	const tTitle = t(curRoute.meta?.title)
	// 此处利用多语言 t('aaa') 是否等于 'aaa' 来判断是否使用多语言
  useTitle(title === tTitle ? title : tTitle)

	if (route.redirect) return <Navigate to={route.redirect} replace />;

  // TODO 在跳转路由之前，清除所有的请求

	const watermarkChildren = <Watermark content={route.meta?.watermark ? (getType(route.meta?.watermark) === 'boolean' ? [pkg.name, pkg.author] : route.meta?.watermark) : ''}>{ props.children }</Watermark>;

	// * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.meta?.requiresAuth) return watermarkChildren;

	// * 判断是否有Token
  const accessToken = Cookies.get(addPrefixName('accessToken'));
	if (!accessToken) return <Navigate to="/login" replace />;

	// // * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	// const dynamicRouter = store.getState().auth.authRouter;
	// // * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	// const staticRouter = [HOME_URL, "/403"];
	// const routers = dynamicRouter.concat(staticRouter);
	// // * 如果访问的地址没有在路由表中重定向到403页面
	// if (routers.indexOf(location.pathname) === -1) return <Navigate to="/403" />;

	// * 当前账号有权限返回 Router，正常访问页面
	return watermarkChildren;
};

export default RouterExtend;
