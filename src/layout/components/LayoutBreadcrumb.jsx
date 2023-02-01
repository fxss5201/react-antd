import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb } from 'antd';
import { routerList } from '../../router/index';
import { searchRoute } from '../../utils/router';
import { getFinalValue } from '../../utils/index';

const LayoutBreadcrumb = ({sideMenuDefaultOpenKeys}) => {
  const { t } = useTranslation();
	const location = useLocation();

  let breadcrumbList = []
  breadcrumbList = sideMenuDefaultOpenKeys.map(x => {
    const curRoute = searchRoute(x, routerList[0].children);
    // 此处是为了防止左侧menu菜单重新渲染的问题
    if (curRoute.redirect) {
      return {
        ...curRoute,
        path: curRoute.redirect
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
