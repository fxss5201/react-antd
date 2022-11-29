import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/en';
import enGb from 'antd/locale/en_GB';
import { ConfigProvider } from 'antd';
import { RouterProvider } from "react-router-dom";
import router from './router/index';
import { useSelector } from 'react-redux';

const localeObj = {
  zhCN,
  enGb
}

const App = () => {
  const locale = useSelector(state => state.locale.value);

  return (
    <div className="App flex h-screen">
      <ConfigProvider
        locale={localeObj[locale]}
        theme={{}}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
