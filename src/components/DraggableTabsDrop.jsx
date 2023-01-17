import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import cloneDeep from 'lodash.clonedeep';

const type = 'DraggableTabNode';
const DraggableTabNode = ({ index, children, moveNode, canDragEvent, canDropEvent }) => {
  const ref = useRef(null);
  const [{ isOver }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
      };
    },
    canDrop: () => {
      return canDropEvent(index);
    },
    drop: (item) => {
      moveNode(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: {
      index,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => {
      return canDragEvent(index);
    }
  });
  drop(drag(ref));

  // Style
  const style = {};
  if (isOver) {
    style.transition = 'all 0.3s';
  }
  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};
const DraggableTabs = (props) => {
  const { items = [], onDragEndEvent, canDragEvent, canDropEvent } = props;
  const [order, setOrder] = useState([]);
  const moveTabNode = (dragKey, hoverKey) => {
    const newOrder = order.slice();
    items.forEach((item) => {
      if (item.key && newOrder.indexOf(item.key) === -1) {
        newOrder.push(item.key);
      }
    });
    const dragIndex = newOrder.indexOf(dragKey);
    const hoverIndex = newOrder.indexOf(hoverKey);
    newOrder.splice(dragIndex, 1);
    newOrder.splice(hoverIndex, 0, dragKey);
    onDragEndEvent(newOrder);
    setOrder(newOrder);
  };
  const renderTabBar = (tabBarProps, DefaultTabBar) => (
    <DefaultTabBar {...tabBarProps}>
      {(node) => (
        <DraggableTabNode key={node.key} index={node.key} moveNode={moveTabNode} canDragEvent={canDragEvent} canDropEvent={canDropEvent}>
          {node}
        </DraggableTabNode>
      )}
    </DefaultTabBar>
  );

  const orderItems = [...items].sort((a, b) => {
    const orderA = order.indexOf(a.key);
    const orderB = order.indexOf(b.key);
    if (orderA !== -1 && orderB !== -1) {
      return orderA - orderB;
    }
    if (orderA !== -1) {
      return -1;
    }
    if (orderB !== -1) {
      return 1;
    }
    const ia = items.indexOf(a);
    const ib = items.indexOf(b);
    return ia - ib;
  });
  
  const tabsProps = cloneDeep(props)
  delete tabsProps.onDragEndEvent;
  delete tabsProps.canDragEvent;
  delete tabsProps.canDropEvent;
  return (
    <DndProvider backend={HTML5Backend}>
      <Tabs renderTabBar={renderTabBar} {...tabsProps} items={orderItems} />
    </DndProvider>
  );
};

export default DraggableTabs;
