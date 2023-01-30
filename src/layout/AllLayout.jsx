import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import RouterExtend from '../router/RouterExtend';
import { AliveScope } from 'react-activation';

const AllLayout = () => {
  return (
    <>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
      <AliveScope>
        <RouterExtend>
          <Outlet />
        </RouterExtend>
      </AliveScope>
    </>
  )
};

export default AllLayout;
