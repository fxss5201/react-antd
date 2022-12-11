import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import PasswordLogin from './PasswordLogin';
import VerificationLogin from './VerificationLogin';

const LoginIndex = () => {
  const { t } = useTranslation();
  const [activeKey , setActiveKey] = useState('1')
  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Tabs
      activeKey={activeKey}
      size="large"
      onChange={onChange}
      centered
      items={[
        {
          label: t('Password Login'),
          key: '1',
          children: <PasswordLogin activeKey={activeKey} />,
        },
        {
          label: t('Verification login'),
          key: '2',
          children: <VerificationLogin activeKey={activeKey} />,
        }
      ]}
    />
  );
}

export default LoginIndex;
