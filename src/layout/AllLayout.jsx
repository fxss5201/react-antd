import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import RouterExtend from '../router/RouterExtend';

const AllLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <RouterExtend>
        <Outlet />
      </RouterExtend>
    </>
  )
};

export default AllLayout;
