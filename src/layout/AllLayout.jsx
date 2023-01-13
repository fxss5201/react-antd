import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import RouterExtend from '../router/RouterExtend';

const AllLayout = () => {
  return (
    <>
      <RouterExtend>
        <ScrollRestoration
          getKey={(location) => {
            return location.pathname;
          }}
        />
        <Outlet />
      </RouterExtend>
    </>
  )
};

export default AllLayout;
