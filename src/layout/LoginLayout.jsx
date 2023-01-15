import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ToggleLang from '../components/ToggleLang';
import { Spin } from 'antd';
import config from '../config/index';

const pkg = require('./../../package.json');

const LoginLayout = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-4 right-8 z-10'>
        {config.isShowToggleLang && <ToggleLang addClass='text-gray-900 hover:text-blue-400' />}
      </div>
      <div className='w-full h-full flex justify-center'>
        <div className='mt-20'>
          <div className='text-lg font-semibold text-center mb-5'>{pkg.name}</div>
          <Suspense fallback={
							<Spin tip="加载中..." size="large">
								<div className='w-full' style={{ height: '50vh' }}></div>
							</Spin>
						}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default LoginLayout;
