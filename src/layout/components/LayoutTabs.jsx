import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import cloneDeep from 'lodash.clonedeep';
import DraggableTabsHover from '../../components/DraggableTabsHover';
import { addPrefixName, getFinalValue } from '../../utils/index';
import { searchRoute } from '../../utils/router';
import { routerList } from '../../router/index';

const LayoutTabs = ({route, collapsed, sideMenuOpenKeys, setSideMenuOpenKeys}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  let localTabs
  localTabs = window.localStorage.getItem(addPrefixName('tabs'))
  if (!localTabs) {
    const homeRoute = searchRoute('/', routerList[0].children);
    localTabs = [
      {
        key: homeRoute.redirect || homeRoute.path,
        label: '首页',
        closable: false,
      }
    ]
  } else {
    localTabs = JSON.parse(localTabs)
  }
  const tabsItemsKeys = localTabs.map(x => x.key)
  if (!tabsItemsKeys.includes(route.path)) {
    localTabs.push({
      key: route.path,
      label: getFinalValue(t, route.meta?.title)
    })
    window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(localTabs))
  }
	const [tabsItems, setTabsItems] = useState(localTabs)
	if (localTabs && tabsItems.length !== localTabs.length) {
		setTabsItems(localTabs)
	}
	const addSideMenuOpenKeys = (key) => {
		const kyes = key.slice(1).split('/').map((x, i, arr) => `/${arr.slice(0, i + 1).join('/')}`).slice(0, -1);
		setSideMenuOpenKeys([...sideMenuOpenKeys, ...kyes])
	}
	const tabsOnChange = (key) => {
		navigate(key);
		addSideMenuOpenKeys(key);
	};
	const tabsOnEdit = (targetKey, action) => {
		if (action === 'remove') {
			const curItems = cloneDeep(tabsItems)
      const curIndex = curItems.findIndex(x => x.key === targetKey)
			curItems.splice(curIndex, 1)
			window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(curItems))
			setTabsItems(curItems)
			if (targetKey === location.pathname) {
				const key = curItems[curIndex - 1].key;
				navigate(key);
				addSideMenuOpenKeys(key);
			}
    }
	}
	const tabsOnDragEndEvent = (keys) => {
    const list = [];
    keys.forEach(key => {
      list.push(tabsItems.find(x => x.key === key))
    });
    setTabsItems(list)
		window.localStorage.setItem(addPrefixName('tabs'), JSON.stringify(list))
  }
  const tabsCanDragEvent = (key) => {
    const cur = tabsItems.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
  }
  const tabsCanDropEvent = (key) => {
    const cur = tabsItems.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
  }

  return (
    <div style={{height: '40px'}}>
      <DraggableTabsHover
        defaultActiveKey={location.pathname}
        activeKey={location.pathname}
        items={tabsItems}
        onChange={tabsOnChange}
        onEdit={tabsOnEdit}
        onDragEndEvent={tabsOnDragEndEvent}
        canDragEvent={tabsCanDragEvent}
        canDropEvent={tabsCanDropEvent}
        type="editable-card"
        hideAdd
        tabBarGutter={0}
        tabBarStyle={{margin: 0}}
        style={{position: 'fixed', top: '64px', left: collapsed ? '80px': '200px', right: 0, zIndex: 10}}
        className='bg-white' />
    </div>
  )
}

export default LayoutTabs;
