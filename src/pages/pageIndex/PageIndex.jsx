import React from 'react';
import { DatePicker, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Watermark } from 'antd';
const pkg = require('../../../package.json');

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const App = () => {
  const { t } = useTranslation();

  return (
    <Watermark content={[pkg.name, pkg.author]}>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
        <DatePicker onChange={onChange} picker="quarter" />
        <DatePicker onChange={onChange} picker="year" />
        <div>{t('Welcome to React')}</div>
      </Space>
    </Watermark>
  )
};
export default App;