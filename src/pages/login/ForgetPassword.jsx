import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Steps, theme } from 'antd';
import ForgetPasswordVerification from './components/ForgetPasswordVerification';
import ForgetPasswordReset from './components/ForgetPasswordReset';

const { useToken } = theme;

const ForgetPassword = () => {
  const { t } = useTranslation();
  const { token } = useToken();
  const { colorPrimary } = token;

  const [current, setCurrent] = useState(0);
  const stepsItems = [
    {
      key: 0,
      title: t('Verification code verification'),
    },
    {
      key: 1,
      title: t('Reset password'),
    }
  ]
  
  const onFinishVerification = (values) => {
    setCurrent(current + 1);
    console.log('Received values of form: ', values);
  }

  const onFinishReset = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ width: '800px' }}>
      <Steps current={current} items={stepsItems} />
      {current === 0 ? <ForgetPasswordVerification onFinishVerification={onFinishVerification} /> : <ForgetPasswordReset onFinishReset={onFinishReset} />}
      <div className='mt-3 clearfix'>
        <Link className="float-left a" to="/login" style={{color: colorPrimary}}>{t('Login!')}</Link>
        <Link className="float-right a" to="/login/register" style={{color: colorPrimary}}>{t('register now!')}</Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
