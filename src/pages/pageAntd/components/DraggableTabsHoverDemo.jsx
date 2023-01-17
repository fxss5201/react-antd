import React, { useState } from 'react';
import cloneDeep from 'lodash.clonedeep';
import DraggableTabsHover from '../../../components/DraggableTabsHover';

const DraggableTabsHoverDemo = () => {
  const [items, setItems] = useState([
    {
      key: 'key1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
      closable: false,
    },
    {
      key: 'key2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: 'key3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: 'key4',
      label: `Tab 4`,
      children: `Content of Tab Pane 4`,
    },
    {
      key: 'key5',
      label: `Tab 5`,
      children: `Content of Tab Pane 5`,
    },
    {
      key: 'key6',
      label: `Tab 6`,
      children: `Content of Tab Pane 6`,
    },
  ])
  const onChange = (key) => {
    console.log(key);
  };
  const onEdit = (targetKey, action) => {
    const list = cloneDeep(items)
    if (action === 'remove') {
      list.splice(list.findIndex(x => x.key === targetKey), 1)
      setItems(list)
    }
  };
  const onDragEndEvent = (keys) => {
    const list = [];
    keys.forEach(key => {
      list.push(items.find(x => x.key === key))
    });
    setItems(list)
  }
  const canDragEvent = (key) => {
    const cur = items.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
  }
  const canDropEvent = (key) => {
    const cur = items.find(x => x.key === key)
    let res = true
    if (cur.hasOwnProperty('closable') && !cur.closable) res = false
    return res
  }

  return (
    <>
      <p>一共有6个tabs，第一个tabs不支持删除和拖拽放置，拖拽其余的在 hover 时即触发切换</p>
      <DraggableTabsHover
        items={items}
        onChange={onChange}
        onEdit={onEdit}
        onDragEndEvent={onDragEndEvent}
        canDragEvent={canDragEvent}
        canDropEvent={canDropEvent}
        type="editable-card"
        hideAdd
        tabBarGutter={0}
        tabBarStyle={{margin: 0}}
      />
    </>
  )
};

export default DraggableTabsHoverDemo;