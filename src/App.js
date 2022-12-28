import React, { Suspense } from 'react';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/en';
import enGb from 'antd/locale/en_GB';
import { ConfigProvider, Spin } from 'antd';
import Router from './router/index';
import AuthRouter from './router/AuthRouter';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTitle } from 'ahooks';
import { HashRouter } from "react-router-dom";
const pkg = require('./../package.json');

const localeObj = {
  zhCN,
  enGb
}

const App = () => {
  const locale = useSelector(state => state.locale.value);
  const { t } = useTranslation();
  useTitle(pkg.name);

  return (
    <HashRouter>
      <div className="App flex h-screen">
        <ConfigProvider
          locale={localeObj[locale]}
          theme={{}}
        >
          <Suspense fallback={
            <Spin tip={t('Loading')} size="large">
              <div className='w-screen h-screen'></div>
            </Spin>
          }>
            <AuthRouter>
              <Router />
            </AuthRouter>
          </Suspense>
        </ConfigProvider>
      </div>
    </HashRouter>
  );
}

export default App;
