import React, { Suspense } from 'react';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/en';
import enGb from 'antd/locale/en_GB';
import { ConfigProvider, Spin, FloatButton, theme } from 'antd';
import router from './router/index';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTitle } from 'ahooks';
import { RouterProvider } from 'react-router-dom';
const pkg = require('./../package.json');

const localeObj = {
  zhCN,
  enGb
}

const App = () => {
  const locale = useSelector(state => state.locale.value);
  const themeInfo = useSelector(state => state.themeInfo.value);
  const { t } = useTranslation();
  useTitle(pkg.name);

  return (
    <div className="App">
      <ConfigProvider
        locale={localeObj[locale]}
        theme={{...themeInfo, algorithm: theme[themeInfo.algorithm]}}
      >
        <Suspense fallback={
          <Spin tip={t('Loading')} size="large">
            <div className='w-screen h-screen'></div>
          </Spin>
        }>
          <RouterProvider router={router} />
          <FloatButton.BackTop />
        </Suspense>
      </ConfigProvider>
    </div>
  );
}

export default App;
