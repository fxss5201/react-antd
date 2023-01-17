import React, { useEffect, useState } from 'react';
import { SafetyCertificateOutlined, MobileOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { useCountDown, useUnmount } from 'ahooks';
import config from '../../../config';
import { getColorPrimary } from '../../../utils';

const VerificationLogin = ({ activeKey }) => {
  const colorPrimary = getColorPrimary();
  const [isValidate, setIsValidate] = useState(false)

  const [form] = Form.useForm()
  useEffect(() => {
    // form.resetFields();
    setTargetDate(undefined);
    setIsGetVerificationLoading(false);
  }, [form, activeKey])

  const { t, i18n } = useTranslation();
  i18n.on('languageChanged', (lng) => {
    if (isValidate) form.validateFields();
  })
  useUnmount(() => {
    i18n.off('languageChanged');
  })

  const [isGetVerificationLoading, setIsGetVerificationLoading] = useState(false);
  const [targetDate, setTargetDate] = useState();
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      setIsGetVerificationLoading(false);
    },
  });

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const getVerification = () => {
    form.validateFields(['Phone']).then(() => {
      setTargetDate(Date.now() + 60 * 1000);
      setIsGetVerificationLoading(true);
    })
  };

  return (
    <Form
      initialValues={{
        remember: true,
      }}
      form={form}
      onFinish={onFinish}
      size="large"
      name="login"
      className="w-80"
    >
      <Form.Item
        name="Phone"
        rules={[
          {
            required: true,
            message: t('Please input your Phone!'),
          },
          {
            pattern: config.phonePattern,
            message: t('Incorrect mobile number format!'),
          },
        ]}
      >
        <Input prefix={<MobileOutlined className="text-gray-400" />} placeholder={t('Phone')} allowClear />
      </Form.Item>

      <Form.Item
        name="Verification"
        rules={[
          {
            required: true,
            message: t('Please input your Verification!'),
          },
          {
            pattern: config.verificationPattern,
            message: t('Incorrect format of verification number!')
          },
        ]}
        className='flex-auto'
      >
        <Input prefix={<SafetyCertificateOutlined className="text-gray-400" />} placeholder={t('Verification')} addonAfter={
          isGetVerificationLoading ? `${Math.round(countdown / 1000)}s` : <div className='cursor-pointer' onClick={getVerification}>{t('Get verification code')}</div>
        } allowClear />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full" onClick={() => setIsValidate(true)}>{t('Log in')}</Button>
        <div className='mt-3 clearfix'>
          <Link className="float-left a" to="/login/register" style={{color: colorPrimary}}>{t('register now!')}</Link>
          <Link className="float-right a" to="/login/password" style={{color: colorPrimary}}>{t('Forgot password')}</Link>
        </div>
      </Form.Item>
    </Form>
  );
}

export default VerificationLogin;
