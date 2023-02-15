import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'antd';
import { routerList } from '../../router/index';
import { searchRoute } from '../../utils/router';
import { getFinalValue } from '../../utils/index';

const LayoutBreadcrumb = ({userInfo, sideMenuDefaultOpenKeys}) => {
  const { t } = useTranslation();
	const location = useLocation();

  let breadcrumbList = []
  breadcrumbList = sideMenuDefaultOpenKeys.map(x => {
    const curRoute = searchRoute(x, routerList[0].children);

    // 此处是为了防止左侧menu菜单重新渲染的问题
    if (curRoute.redirect && curRoute.children) {
      // 权限筛选
      const accessList = curRoute.children.filter(item => (!item.requiresAuth && !item.access) || userInfo.access.includes(item.access))
      const accessListPath = accessList.map(y => y.path)
      let path = curRoute.redirect
      if (!accessListPath.includes(path) && accessListPath.length) {
        path = accessListPath[0]
      }
      return {
        ...curRoute,
        path
      }
    }
    return curRoute;
  });

  return (
    <Breadcrumb className='mb-6'>
      {breadcrumbList.map(item => {
        return <Breadcrumb.Item key={item.path}>{item.path === location.pathname ? <>{item.meta?.icon}{getFinalValue(t, item.meta?.title)}</> : <Link to={item.path}>{item.meta?.icon}{getFinalValue(t, item.meta?.title)}</Link>}</Breadcrumb.Item>
      })}
    </Breadcrumb>
  )
}

export default LayoutBreadcrumb;
