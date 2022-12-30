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
 * @description 递归查询menu展示的路由
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchMenuRoutes = (routes = []) => {
	let result = [];
	for (let item of routes) {
		if (!item.meta?.hideInMenu) {
      if (item.children) {
        result.push({
          ...item,
          children: searchMenuRoutes(item.children)
        })
      } else {
        result.push(item)
      }
    }
	}
	return result;
};

/**
 * @description 递归menu路由转换为Menu导航菜单
 * @param {Array} routes 路由列表
 * @returns array
 */
export const menuRoutesToMenuItems = (routes = []) => {
	let result = [];
	for (let item of routes) {
		if (!item.meta?.hideInMenu) {
      if (item.children) {
        result.push({
          key: item.path,
          icon: item.meta?.icon,
          label: item.meta?.title,
          children: menuRoutesToMenuItems(item.children)
        })
      } else {
        result.push({
          key: item.path,
          icon: item.meta?.icon,
          label: item.meta?.title,
        })
      }
    }
	}
	return result;
};
