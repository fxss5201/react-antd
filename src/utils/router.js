/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path = '', routes = []) => {
	let result = {};
	for (let item of routes) {
		if (item.path === path) return item;
		if (item.children) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res).length) result = res;
		}
	}
	return result;
};

/**
 * @description 递归查询menu可展示的路由
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchShowMenuRoutes = (routes = []) => {
	let result = [];
	for (let item of routes) {
		if (!item.hideInMenu) {
      if (item.children) {
        result.push({
          ...item,
          children: searchShowMenuRoutes(item.children)
        })
      } else {
        result.push(item)
      }
    }
	}
	return result;
};

/**
 * 递归menu可展示的路由根据权限过滤
 * @param {*} routes 路由列表
 * @param {*} access 权限列表
 * @returns array
 */
export const showMenuRoutesFilterAccess = (routes = [], access = []) => {
  let result = [];
	for (let item of routes) {
    if (!item.access || access.includes(item.access)) {
      if (item.children) {
        item.children = showMenuRoutesFilterAccess(item.children, access)
      }
      result.push(item)
    }
	}
	return result;
}

/**
 * @description 递归menu可展示的路由转换为Menu导航菜单
 * @param {Array} routes 路由列表
 * @returns array
 */
export const showMenuRoutesToMenuItems = (routes = []) => {
	let result = [];
	for (let item of routes) {
    if (item.children) {
      result.push({
        key: item.path,
        icon: item.meta?.icon,
        label: item.meta?.title,
        children: showMenuRoutesToMenuItems(item.children)
      })
    } else {
      result.push({
        key: item.path,
        icon: item.meta?.icon,
        label: item.meta?.title,
      })
    }
	}
	return result;
};
