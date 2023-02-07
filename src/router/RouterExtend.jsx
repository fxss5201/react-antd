import React from 'react';
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { addPrefixName, getType, getFinalValue } from '../utils/index';
import Cookies from 'js-cookie';
import { searchRoute } from '../utils/router';
import { routerList } from './index';
import { useTitle } from 'ahooks';
import { useTranslation } from 'react-i18next';
import { Watermark } from 'antd';
import config from '../config';


const RouterExtend = (props) => {
  const { t } = useTranslation();
	const location = useLocation();
  const route = searchRoute(location.pathname, routerList[0].children);
	
	const userInfo = useSelector(state => state.userInfo.value);

  let curRoute = route
  if (route.children && route.children[0]?.index) {
    curRoute = route.children[0]
  }
  
	// 此处利用多语言 t('aaa') 是否等于 'aaa' 来判断是否使用多语言
  useTitle(getFinalValue(t, curRoute.meta?.title))

	if (route.redirect) return <Navigate to={route.redirect} replace />;

	// 获取config设置的水印
	const getConfigWatermark = () => {
		let result = config.watermark;
		if (getType(config.watermark) === 'object') {
			result = config.watermark.user.map(key => userInfo[key]);
		} else if (getType(config.watermark) === 'function') {
			result = config.watermark(userInfo);
		}
		return result;
	}

	let watermarkContent = route.watermark || '';
	if (route.watermark) {
		if (getType(route.watermark) === 'object') {
			watermarkContent = route.watermark.user.map(key => userInfo[key]);
		} else if (getType(route.watermark) === 'boolean') {
			watermarkContent = getConfigWatermark()
		} else if (getType(route.watermark) === 'function') {
			watermarkContent = route.watermark(userInfo);
		}
	}

	const watermarkChildren = <Watermark content={watermarkContent}>{ props.children }</Watermark>;

	// * 判断当前路由是否需要访问权限(不需要权限直接放行)
	if (!route.requiresAuth && !route.access) return watermarkChildren;

	// * 判断是否有Token
  const accessToken = Cookies.get(addPrefixName('accessToken'));
	if (!accessToken) return <Navigate to="/login" replace />;

	if (route.access) {
		const noAccessPath = config.noAccessPath || '/403';
		if (!userInfo.access.includes(route.access)) return <Navigate to={noAccessPath} />;
	}

	// 当前账号有权限返回 Router，正常访问页面
	return watermarkChildren;
};

export default RouterExtend;
