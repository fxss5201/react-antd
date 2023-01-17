import React from 'react';
import DraggableTabsHoverDemo from './components/DraggableTabsHoverDemo';
import DraggableTabsDropDemo from './components/DraggableTabsDropDemo';

const PageDraggableTabs = () => {
  return (
    <>
      <DraggableTabsHoverDemo></DraggableTabsHoverDemo>
      <div className='mb-4'></div>
      <DraggableTabsDropDemo></DraggableTabsDropDemo>
    </>
  )
};

export default PageDraggableTabs;